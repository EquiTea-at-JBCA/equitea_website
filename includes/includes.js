// Simple HTML include loader for sidebar / reusable chunks
document.addEventListener('DOMContentLoaded', () => {
  const includeTargets = document.querySelectorAll('[data-include]');

  includeTargets.forEach(target => {
    const name = target.getAttribute('data-include'); // e.g. "sidebar"
    const url = `includes/${name}.html`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load include: ${url}`);
        }
        return response.text();
      })
      .then(html => {
        target.innerHTML = html;
      })
      .catch(err => {
        console.error(err);
        target.innerHTML = '<p style="color:red;">Could not load content.</p>';
      });
  });
});
