// Shared initialization functions
window.SharedInit = {
  // Initialize language functionality
  initializeLanguage: function() {
    // Function to update page content based on language
    function setLanguage(lang) {
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (SharedData.translations[lang] && SharedData.translations[lang][key]) {
          element.textContent = SharedData.translations[lang][key];
        }
      });
      // Update the current flag emoji
      const currentFlag = document.getElementById('current-flag');
      if (currentFlag) {
        currentFlag.textContent = lang === 'en' ? '🇬🇧' : '🇩🇪';
      }
      // Update the html lang attribute
      document.documentElement.lang = lang;
    }

    // Set default language to English
    setLanguage('en');

    // Add event listeners to flag options
    document.querySelectorAll('.flag-option').forEach(flag => {
      flag.addEventListener('click', () => {
        const lang = flag.getAttribute('data-lang');
        setLanguage(lang);
      });
    });

    // Store setLanguage function globally for potential external use
    window.setLanguage = setLanguage;
  },

  // Initialize experience section toggle functionality
  initializeExperienceToggles: function() {
    // Add click handlers for experience toggles
    document.querySelectorAll('.experience-table .toggle').forEach(toggle => {
      toggle.addEventListener('click', function() {
        const detailsRow = this.parentElement.nextElementSibling;
        const icon = this.querySelector('.toggle-icon');
        
        if (detailsRow && detailsRow.classList.contains('experience-details')) {
          if (detailsRow.style.display === 'table-row') {
            detailsRow.style.display = 'none';
            icon.textContent = '+';
          } else {
            detailsRow.style.display = 'table-row';
            icon.textContent = '−';
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

  // Initialize all shared functionality
  initializeAll: function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.initializeLanguage();
        this.initializeExperienceToggles();
        this.initializeWorkGallery();
      });
    } else {
      this.initializeLanguage();
      this.initializeExperienceToggles();
      this.initializeWorkGallery();
    }
  }
};