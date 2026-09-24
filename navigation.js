// Responsive disclosure for the existing navigation links; no destinations change.
const menuButton = document.querySelector('.nav-toggle');
const siteNavigation = document.getElementById('site-navigation');
if (menuButton && siteNavigation) {
  document.documentElement.classList.add('navigation-ready');
  const setMenu = open => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    siteNavigation.classList.toggle('is-open', open);
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  siteNavigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false); menuButton.focus();
    }
  });
}
