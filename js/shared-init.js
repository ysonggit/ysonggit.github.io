// Shared initialization functions
window.SharedInit = {
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
            icon.textContent = '–';
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