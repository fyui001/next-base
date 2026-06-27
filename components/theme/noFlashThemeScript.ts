/**
 * When the theme cookie is unset, SSR cannot read `prefers-color-scheme`, so we
 * run this inline script before hydration to apply the `dark` class. This
 * prevents the "light flash, then switch to dark after mount" flicker.
 *
 * The content is a constant string with no user input, so there is no XSS risk.
 */
export const NO_FLASH_THEME_SCRIPT = `
(function(){
  try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
})();
`
