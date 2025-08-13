// Template loader for automatically injecting shared components
window.TemplateLoader = {
  // Initialize template loading
  init: function() {
    this.loadTemplates();
  },

  // Load all templates based on data attributes
  loadTemplates: function() {
    // Load header
    this.loadComponent('data-template="header"', SharedComponents.getHeader());
    
    // Load work gallery
    this.loadComponent('data-template="work-gallery"', SharedComponents.getWorkGallery());
    
    // Load connect section
    this.loadComponent('data-template="connect-section"', SharedComponents.getConnectSection());
    
    // Load experience section
    this.loadComponent('data-template="experience-section"', SharedComponents.getExperienceSection());
    
    // Load scripts section
    this.loadComponent('data-template="scripts"', SharedComponents.getScriptsSection());
  },

  // Load a specific component into elements with matching data attribute
  loadComponent: function(selector, html) {
    const elements = document.querySelectorAll(`[${selector}]`);
    elements.forEach(element => {
      element.innerHTML = html;
    });
  },

  // Load a component into a specific element by ID
  loadComponentById: function(elementId, html) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = html;
    }
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (window.TemplateLoader) {
    TemplateLoader.init();
  }
});
