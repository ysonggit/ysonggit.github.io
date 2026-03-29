// Shared HTML components for reuse across pages
window.SharedComponents = {
  // Generate the experience table HTML from SharedData.experience
  renderExperienceSection: function() {
    if (!window.SharedData || !SharedData.experience) return '';
    var html = '<table class="experience-table">';
    SharedData.experience.forEach(function(e) {
      html += '<tr>' +
        '<th data-i18n="' + e.titleKey + '"></th>' +
        '<td class="years">' + e.years + '</td>' +
        '<td class="company">' + e.company + '</td>' +
        '<td class="toggle"><span class="toggle-icon">+</span></td>' +
        '</tr>' +
        '<tr class="experience-details">' +
        '<td colspan="4"><p data-i18n="' + e.descriptionKey + '"></p></td>' +
        '</tr>';
    });
    html += '</table>';
    return html;
  }
};