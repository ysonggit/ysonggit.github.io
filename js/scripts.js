document.addEventListener('DOMContentLoaded', function () {
    // Event delegation for toggle icons
    document.querySelector('.experience-table').addEventListener('click', function (event) {
      if (event.target.classList.contains('toggle-icon')) {
        toggleRow(event.target);
      }
    });
  
  // Smooth navigation for anchors
  document.querySelectorAll('.nav a').forEach(anchor => {
      anchor.addEventListener('click', function (event) {
        const href = this.getAttribute('href') || '';

        // In-page anchors like '#info'
        if (href.startsWith('#')) {
          event.preventDefault();
          const targetId = href.slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }

        // Cross-page anchors to index like '/#info'
        if (href.startsWith('/#')) {
          const targetId = href.slice(2);
          // If already on index, smooth scroll; else allow default navigation
          if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            event.preventDefault();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
          return;
        }

        // For other links, allow default navigation
      });
    });
  
    // Hover effect for images with class 'hover-image'
    document.querySelectorAll('.hover-image').forEach(image => {
      const defaultSrc = image.src;
      const hoverSrc = image.getAttribute('data-hover');
  
      image.addEventListener('mouseover', function () {
        image.style.opacity = '0'; // Fade out
        setTimeout(() => {
          image.src = hoverSrc;
          image.style.opacity = '1'; // Fade in
        }, 300); // Match the transition duration
      });
  
      image.addEventListener('mouseout', function () {
        image.style.opacity = '0'; // Fade out
        setTimeout(() => {
          image.src = defaultSrc;
          image.style.opacity = '1'; // Fade in
        }, 300); // Match the transition duration
      });
    });
  });
  
  function toggleRow(toggleIcon) {
    // Find the parent <td class="toggle">
    const toggleCell = toggleIcon.parentElement;

    // Find the parent row (<tr>) of the toggle cell
    const row = toggleCell.parentElement;

    // Find the next row, which is the details row
    const detailsRow = row.nextElementSibling;

    // Toggle the expanded class and update the icon with smooth animation
    if (!detailsRow.classList.contains('expanded')) {
      detailsRow.classList.add('expanded');
      toggleIcon.textContent = "–";
      toggleIcon.classList.add('active');
    } else {
      detailsRow.classList.remove('expanded');
      toggleIcon.textContent = "+";
      toggleIcon.classList.remove('active');
    }
  }