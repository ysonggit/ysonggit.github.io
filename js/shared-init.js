// Shared initialization functions
window.SharedInit = {
  // Ensure shared data/scripts are present; try multiple path strategies for local file serving
  ensureSharedScripts: function(callback) {
    if (window.SharedData && window.SharedData.translations) {
      callback();
      return;
    }

    function loadScript(url, onLoad, onError) {
      const existing = Array.from(document.scripts).some(s => s.src && s.src.includes(url));
      if (existing) {
        // If already present in DOM, wait a tick for onload events, then continue
        setTimeout(onLoad, 0);
        return;
      }
      const script = document.createElement('script');
      script.src = url;
      script.onload = onLoad;
      script.onerror = onError;
      document.head.appendChild(script);
    }

    const dataCandidates = ['./js/shared-data.js', '../js/shared-data.js', '/js/shared-data.js'];
    const compCandidates = ['"./js/shared-components.js"', '"../js/shared-components.js"', '"/js/shared-components.js"'];

    // Load shared-data first, then shared-components, then callback
    (function tryLoadData(idx) {
      if (window.SharedData && window.SharedData.translations) {
        // Already available
        tryLoadComponents(0);
        return;
      }
      if (idx >= dataCandidates.length) {
        console.warn('SharedData not found after trying multiple paths');
        callback();
        return;
      }
      loadScript(dataCandidates[idx], () => {
        // Give the script a moment to execute
        setTimeout(() => tryLoadData(idx + (window.SharedData ? dataCandidates.length : 1)), 0);
      }, () => tryLoadData(idx + 1));
    })(0);

    function tryLoadComponents(idx) {
      if (window.SharedComponents) {
        callback();
        return;
      }
      if (idx >= compCandidates.length) {
        // components are optional; proceed anyway
        callback();
        return;
      }
      const url = compCandidates[idx].replace(/^["']|["']$/g, '');
      loadScript(url, () => {
        setTimeout(() => tryLoadComponents(idx + (window.SharedComponents ? compCandidates.length : 1)), 0);
      }, () => tryLoadComponents(idx + 1));
    }
  },
  // Initialize language functionality
  initializeLanguage: function() {
    // Function to update page content based on language
    function setLanguage(lang) {
      console.log('Setting language to:', lang); // Debug log
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (SharedData.translations[lang] && SharedData.translations[lang][key]) {
          element.textContent = SharedData.translations[lang][key];
        }
      });
      // Update the current flag (supports emoji <span> or image <img>)
      const currentFlag = document.getElementById('current-flag');
      if (currentFlag) {
        const isImage = currentFlag.tagName && currentFlag.tagName.toLowerCase() === 'img';
        if (isImage) {
          const assetBase = '/assets/img';
          if (lang === 'en') {
            currentFlag.setAttribute('src', assetBase + '/flag-usa.png');
            currentFlag.setAttribute('alt', 'English');
          } else {
            currentFlag.setAttribute('src', assetBase + '/flag-germany.png');
            currentFlag.setAttribute('alt', 'Deutsch');
          }
        } else {
          // Default to country emoji
          currentFlag.textContent = lang === 'en' ? '🇺🇸' : '🇩🇪';
        }
      }
      // Update the html lang attribute
      document.documentElement.lang = lang;
    }

    // Set default language to English
    setLanguage('en');

    // Add event listeners to flag options with debug logging
    const flagOptions = document.querySelectorAll('.flag-option');
    console.log('Found flag options:', flagOptions.length); // Debug log
    
    flagOptions.forEach((flag, index) => {
      console.log(`Flag ${index}:`, flag.getAttribute('data-lang')); // Debug log
      flag.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const lang = flag.getAttribute('data-lang');
        console.log('Flag clicked, switching to:', lang); // Debug log
        setLanguage(lang);
        const dropdown = document.querySelector('.language-dropdown');
        if (dropdown) dropdown.style.display = 'none';
      });
    });

    // Also add click handler to the main flag icon to toggle dropdown
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) {
      currentFlag.addEventListener('click', () => {
        const dropdown = document.querySelector('.language-dropdown');
        if (dropdown) {
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
      });
    }

    // Store setLanguage function globally for potential external use
    window.setLanguage = setLanguage;
  },

  // Initialize experience section toggle functionality
  initializeExperienceToggles: function() {
    // On page load, ensure all details are hidden and all icons are +
    document.querySelectorAll('.experience-table .experience-details').forEach(row => {
      row.classList.remove('expanded');
    });
    document.querySelectorAll('.experience-table .toggle-icon').forEach(icon => {
      icon.textContent = '+';
      icon.classList.remove('active');
    });

    // Add click handlers for experience toggles
    document.querySelectorAll('.experience-table .toggle').forEach(toggle => {
      toggle.addEventListener('click', function() {
        const detailsRow = this.parentElement.nextElementSibling;
        const icon = this.querySelector('.toggle-icon');
        
        if (detailsRow && detailsRow.classList.contains('experience-details')) {
          if (detailsRow.classList.contains('expanded')) {
            // Collapse: remove expanded class to trigger CSS transition
            detailsRow.classList.remove('expanded');
            icon.textContent = '+';
            icon.classList.remove('active');
          } else {
            // Expand: add expanded class to trigger CSS transition
            detailsRow.classList.add('expanded');
            icon.textContent = '–';
            icon.classList.add('active');
          }
        }
      });
    });
  },

  // Initialize hover effects for work gallery
  initializeWorkGallery: function() {
    document.querySelectorAll('.hover-image').forEach(img => {
      const originalSrc = img.src;
      const hoverSrc = img.getAttribute('data-hover');
      
      if (hoverSrc) {
        img.addEventListener('mouseenter', function() {
          this.src = hoverSrc;
        });
        
        img.addEventListener('mouseleave', function() {
          this.src = originalSrc;
        });
      }
    });
  },

  // Try to fix broken absolute asset paths when running locally
  initializeImageFallbacks: function() {
    const candidatesFor = (path) => [
      path,
      path.startsWith('/assets/') ? '.' + path : path,
      path.startsWith('/assets/') ? '..' + path : path
    ];

    document.querySelectorAll('img').forEach((img) => {
      const originalSrc = img.getAttribute('src');
      if (!originalSrc) return;
      let tried = 0;
      const candidates = candidatesFor(originalSrc);
      img.addEventListener('error', function onError() {
        tried += 1;
        if (tried >= candidates.length) {
          img.removeEventListener('error', onError);
          return;
        }
        img.setAttribute('src', candidates[tried]);
      });
    });
  },

  // Initialize all shared functionality
  initializeAll: function() {
    const runInit = () => {
      this.initializeLanguage();
      this.initializeExperienceToggles();
      this.initializeWorkGallery();
      this.initializeImageFallbacks();
    };

    const start = () => this.ensureSharedScripts(runInit);

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }
  }
};