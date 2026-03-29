// Canvas-based text rendering with a yellow reading-highlight that sweeps line by line.
(function () {
  'use strict'

  var P = window.Pretext
  if (!P) return

  // ─── CONFIG ──────────────────────────────────────────────────────────
  var FONT_SIZE     = 12
  var LINE_HEIGHT   = 28
  var FONT          = FONT_SIZE + 'px "Spline Sans Mono","Courier New",monospace'
  var FONT_BOLD     = '600 ' + FONT_SIZE + 'px "Spline Sans Mono","Courier New",monospace'
  var TEXT_Y_OFF    = (LINE_HEIGHT - FONT_SIZE) / 2
  var PARA_GAP      = 14
  var BG_COLOR      = '#f5f5f5'
  var TEXT_COLOR    = 'rgb(8, 8, 33)'
  var TITLE_COLOR   = '#080708'
  var HL_COLOR      = 'rgba(255, 236, 0, 0.42)'   // yellow marker
  var HL_RADIUS     = 3                             // rounded corners (px)
  var LINE_DWELL_MS = 1400                          // time spent on each line
  var SLIDE_SPEED   = 0.18                          // lerp factor per frame (smoothness)
  var PAUSE_AT_END  = 1800                          // pause (ms) before looping
  // ─────────────────────────────────────────────────────────────────────

  function enhanceIntroSection(section) {
    var introText  = section.querySelector('.intro-text')
    var introImage = section.querySelector('.intro-image')
    if (!introText || !introImage) return

    // ── Collect paragraphs (store i18n keys for language switching) ───
    var paragraphs = []
    var h2 = introText.querySelector('h2')
    var h2Key = h2 ? h2.getAttribute('data-i18n') : ''
    var firstP = true
    introText.querySelectorAll('p[data-i18n]').forEach(function (p) {
      var text = p.textContent.trim()
      if (!text) return
      var title = ''
      var titleKey = ''
      if (firstP) {
        title    = h2 ? h2.textContent.trim() : ''
        titleKey = h2Key || ''
        firstP   = false
      } else {
        var cs = p.closest('.content-section')
        var h3 = cs ? cs.querySelector('h3') : null
        title    = h3 ? h3.textContent.trim() : ''
        titleKey = h3 ? (h3.getAttribute('data-i18n') || '') : ''
      }
      paragraphs.push({ titleKey: titleKey, textKey: p.getAttribute('data-i18n'), title: title, text: text })
    })
    if (!paragraphs.length) return

    // ── Build DOM ─────────────────────────────────────────────────────
    var cv   = document.createElement('canvas')
    cv.style.cssText = 'display:block;border-radius:4px;cursor:default'

    var wrap = document.createElement('div')
    wrap.className = 'clawd-canvas-wrap'

    introText.innerHTML = ''
    introText.classList.add('clawd-text-col')
    section.classList.add('clawd-enhanced')
    wrap.appendChild(cv)
    introText.appendChild(wrap)

    // ── State ─────────────────────────────────────────────────────────
    var cvW      = 0
    var canvasH  = 0
    var preps    = null
    var laidLines = []       // all laid-out lines: { text, x, y, pi, first }

    // Highlight animation state
    var hlIdx      = 0       // which line is currently highlighted
    var hlY        = 0       // animated y position (canvas coords, lerps toward target)
    var hlTargetY  = 0       // target y for smooth glide
    var lastDwell  = 0       // timestamp when we last advanced to a new line
    var pausing    = false   // true during end-of-text pause before loop

    // ── Apply translations for a given language ───────────────────────
    function applyLanguage(lang) {
      var trans = window.SharedData && SharedData.translations && SharedData.translations[lang]
      if (!trans) return
      paragraphs.forEach(function (pg) {
        if (pg.textKey && trans[pg.textKey])   pg.text  = trans[pg.textKey]
        if (pg.titleKey && trans[pg.titleKey]) pg.title = trans[pg.titleKey]
      })
      preps = paragraphs.map(function (p) {
        return P.prepareWithSegments(p.text, FONT)
      })
      laidLines = layoutLines()
      var lastLine = laidLines[laidLines.length - 1]
      canvasH = lastLine ? lastLine.y + LINE_HEIGHT + 24 : 240
      // Reset animation to top
      hlIdx     = 0
      hlY       = laidLines.length > 0 ? laidLines[0].y : 0
      hlTargetY = hlY
      lastDwell = performance.now()
      pausing   = false
    }

    // ── Layout all lines ─────────────────────────────────────────────
    function layoutLines() {
      var colW = cvW
      var y    = 0
      var lines = []
      for (var pi = 0; pi < paragraphs.length; pi++) {
        var cursor    = { segmentIndex: 0, graphemeIndex: 0 }
        var firstLine = true
        for (;;) {
          var line = P.layoutNextLine(preps[pi], cursor, colW)
          if (!line) break
          lines.push({ text: line.text, x: 0, y: y, pi: pi, first: firstLine })
          cursor    = line.end
          y        += LINE_HEIGHT
          firstLine = false
        }
        y += PARA_GAP
      }
      return lines
    }

    // ── Draw one frame ────────────────────────────────────────────────
    function draw(now) {
      var dpr = window.devicePixelRatio || 1
      var CH  = canvasH

      // Advance highlight index based on dwell time
      if (!pausing) {
        if (now - lastDwell >= LINE_DWELL_MS) {
          if (hlIdx < laidLines.length - 1) {
            hlIdx++
            hlTargetY = laidLines[hlIdx].y
            lastDwell = now
          } else {
            // reached last line — pause then loop
            pausing = true
            lastDwell = now
          }
        }
      } else {
        if (now - lastDwell >= PAUSE_AT_END) {
          hlIdx     = 0
          hlY       = laidLines.length > 0 ? laidLines[0].y : 0
          hlTargetY = hlY
          lastDwell = now
          pausing   = false
        }
      }

      // Smooth glide toward target
      hlY += (hlTargetY - hlY) * SLIDE_SPEED

      // Resize canvas
      cv.width        = cvW * dpr
      cv.height       = CH  * dpr
      cv.style.width  = cvW + 'px'
      cv.style.height = CH  + 'px'

      var ctx = cv.getContext('2d')
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, cvW, CH)
      ctx.fillStyle = BG_COLOR
      ctx.fillRect(0, 0, cvW, CH)

      // Draw yellow highlight behind text
      ctx.fillStyle = HL_COLOR
      var hy = Math.round(hlY)
      if (ctx.roundRect) {
        ctx.beginPath()
        ctx.roundRect(0, hy, cvW, LINE_HEIGHT, HL_RADIUS)
        ctx.fill()
      } else {
        ctx.fillRect(0, hy, cvW, LINE_HEIGHT)
      }

      // Draw text
      ctx.textBaseline = 'top'
      for (var li = 0; li < laidLines.length; li++) {
        var ln    = laidLines[li]
        var ly    = ln.y + TEXT_Y_OFF
        var title = paragraphs[ln.pi].title

        if (ln.first && title && ln.text.indexOf(title) === 0) {
          ctx.font      = FONT_BOLD
          ctx.fillStyle = TITLE_COLOR
          ctx.fillText(title, ln.x, ly)
          var tw        = ctx.measureText(title).width
          ctx.font      = FONT
          ctx.fillStyle = TEXT_COLOR
          ctx.fillText(ln.text.slice(title.length), ln.x + tw, ly)
        } else {
          ctx.font      = FONT
          ctx.fillStyle = TEXT_COLOR
          ctx.fillText(ln.text, ln.x, ly)
        }
      }
    }

    // ── Animation loop ────────────────────────────────────────────────
    function loop(now) {
      draw(now)
      requestAnimationFrame(loop)
    }

    // ── Resize ────────────────────────────────────────────────────────
    window.addEventListener('resize', function () {
      cvW       = wrap.offsetWidth
      laidLines = layoutLines()
      // recalculate canvas height
      var lastLine = laidLines[laidLines.length - 1]
      canvasH = lastLine ? lastLine.y + LINE_HEIGHT + 24 : 240
      cv.style.height = canvasH + 'px'
      // clamp highlight index
      if (hlIdx >= laidLines.length) hlIdx = laidLines.length - 1
      hlTargetY = laidLines[hlIdx] ? laidLines[hlIdx].y : 0
      hlY = hlTargetY
    })

    // ── Init ─────────────────────────────────────────────────────────
    document.fonts.ready.then(function () {
      preps = paragraphs.map(function (p) {
        return P.prepareWithSegments(p.text, FONT)
      })

      cvW       = wrap.offsetWidth
      laidLines = layoutLines()

      var lastLine = laidLines[laidLines.length - 1]
      canvasH = lastLine ? lastLine.y + LINE_HEIGHT + 24 : 240

      hlIdx     = 0
      hlY       = laidLines.length > 0 ? laidLines[0].y : 0
      hlTargetY = hlY
      lastDwell = performance.now()

      requestAnimationFrame(loop)

      // ── Re-render canvas when language changes ────────────────────────
      document.addEventListener('languagechange', function (e) {
        applyLanguage(e.detail.lang)
      })
    })
  }

  function init() {
    document.querySelectorAll('.intro-section').forEach(enhanceIntroSection)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
