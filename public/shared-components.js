// Shared component generators to eliminate HTML duplication
window.SharedComponents = {
  // Generate language selector
  generateLanguageSelector: function() {
    return `
      <div class="language-selector">
        <span class="flag-icon" id="current-flag">🇬🇧</span>
        <div class="language-dropdown">
          <span class="flag-option" data-lang="en">🇬🇧</span>
          <span class="flag-option" data-lang="de">🇩🇪</span>
        </div>
      </div>
    `;
  },

  // Generate experience table
  generateExperienceTable: function() {
    let html = '<table class="experience-table">';
    
    SharedData.experience.forEach(exp => {
      html += `
        <tr>
          <th data-i18n="${exp.titleKey}">${SharedData.translations.en[exp.titleKey]}</th>
          <td class="years">${exp.years}</td>
          <td class="company">${exp.company}</td>
          <td class="toggle"><span class="toggle-icon">+</span></td>
        </tr>
        <tr class="experience-details">
          <td colspan="4">
            <p data-i18n="${exp.descriptionKey}">${SharedData.translations.en[exp.descriptionKey]}</p>
          </td>
        </tr>
      `;
    });
    
    html += '</table>';
    return html;
  },

  // Generate work gallery
  generateWorkGallery: function() {
    let html = '<div class="work-gallery">';
    
    SharedData.workGallery.forEach(item => {
      html += `
        <a href="${item.href}" class="work-item-link">
          <div class="work-item">
            <img src="${item.img}" alt="${item.alt}"${item.hoverImg ? ` data-hover="${item.hoverImg}" class="hover-image"` : ''}>
            <p data-i18n="${item.titleKey}">${SharedData.translations.en[item.titleKey]}</p>
          </div>
        </a>
      `;
    });
    
    html += '</div>';
    return html;
  },

  // Generate social links
  generateSocialLinks: function() {
    let html = '<div class="social-links">';
    
    SharedData.socialLinks.forEach(link => {
      html += `
        <a href="${link.href}" target="_blank" class="social-icon" aria-label="${link.ariaLabel}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${link.svg}
          </svg>
        </a>
      `;
    });
    
    html += '</div>';
    return html;
  },

  // Generate connect section
  generateConnectSection: function() {
    return `
      <div class="connect-section" id="connect">
        <div class="connect-banner">
          <img src="/assets/img/IMG_2829.jpg" alt="Connect Banner">
        </div>
        <div class="connect-content">
          <div class="connect-title">
            <h2 data-i18n="connect-title">${SharedData.translations.en['connect-title']}</h2>
            <div class="social-links-static">
              ${this.generateSocialLinks()}
            </div>
          </div>
          <div class="connect-details">
            <p><strong data-i18n="connect-mail-label">${SharedData.translations.en['connect-mail-label']}</strong> ysong.sc@gmail.com</p>
            <p><strong data-i18n="connect-location-label">${SharedData.translations.en['connect-location-label']}</strong> <span data-i18n="connect-location">${SharedData.translations.en['connect-location']}</span></p>
            <p class="claude-credit">
              <img src="/assets/img/claude-icon-8x.png" alt="Claude AI" class="claude-icon">
              <span data-i18n="claude-credit">${SharedData.translations.en['claude-credit']}</span>
            </p>
          </div>
        </div>
      </div>
    `;
  },

  // Generate work section with gallery
  generateWorkSection: function() {
    return `
      <div class="work-section" id="work">
        <h2 data-i18n="work-title">${SharedData.translations.en['work-title']}</h2>
        ${this.generateWorkGallery()}
      </div>
    `;
  },

  // Generate experience section
  generateExperienceSection: function() {
    return `
      <div class="experience-section">
        <h2 data-i18n="experience-title">${SharedData.translations.en['experience-title']}</h2>
        ${this.generateExperienceTable()}
      </div>
    `;
  }
};