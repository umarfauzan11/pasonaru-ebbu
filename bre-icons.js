/**
 * Simple BRE (Brand Resource Element) icon loader for the skills section.
 * This script dynamically loads SVG icons from a public CDN or local source
 * based on the data-icon attribute on elements with class 'bre-icon'.
 */

document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.bre-icon');

  icons.forEach(icon => {
    const iconName = icon.getAttribute('data-icon');
    if (!iconName) return;

    // Example: Using simpleicons.org CDN for brand icons SVG
    // You can replace this URL with any other icon source or local path
    const url = `https://cdn.simpleicons.org/${iconName}`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(svgText => {
        icon.innerHTML = svgText;
        // Optional: style the SVG to fit container
        const svg = icon.querySelector('svg');
        if (svg) {
          svg.setAttribute('width', '48');
          svg.setAttribute('height', '48');
          svg.setAttribute('fill', '#f39c12');
        }
      })
      .catch(error => {
        console.error('Error loading icon:', iconName, error);
        icon.textContent = iconName; // fallback text
      });
  });
});
