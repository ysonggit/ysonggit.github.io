document.addEventListener('DOMContentLoaded', function () {
    // Event delegation for toggle icons
    document.querySelector('.experience-table').addEventListener('click', function (event) {
      if (event.target.classList.contains('toggle-icon')) {
        toggleRow(event.target);
      }
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
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
  
    // Toggle the display of the details row and update the icon
    if (detailsRow.style.display === "none" || detailsRow.style.display === "") {
      detailsRow.style.display = "table-row";
      toggleIcon.textContent = "–";
    } else {
      detailsRow.style.display = "none";
      toggleIcon.textContent = "+";
    }
  }