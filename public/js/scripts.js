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
    console.log("toggleRow called, toggleIcon:", toggleIcon); // Debug log
  
    // Find the parent <td class="toggle">
    const toggleCell = toggleIcon.parentElement;
    console.log("toggleCell:", toggleCell); // Debug log
  
    // Find the parent row (<tr>) of the toggle cell
    const row = toggleCell.parentElement;
    console.log("row:", row); // Debug log
  
    // Find the next row, which is the details row
    const detailsRow = row.nextElementSibling;
    console.log("detailsRow:", detailsRow); // Debug log
  
    // Toggle the display of the details row and update the icon
    if (detailsRow.style.display === "none" || detailsRow.style.display === "") {
      detailsRow.style.display = "table-row";
      toggleIcon.textContent = "–";
      console.log("Row unfolded, icon set to –");
    } else {
      detailsRow.style.display = "none";
      toggleIcon.textContent = "+";
      console.log("Row folded, icon set to +");
    }
  }