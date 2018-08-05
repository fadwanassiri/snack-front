export const isInIframe = () =>
  !!(
    window.parent &&
    window.parent.length &&
    window.parent.length - document.querySelectorAll('iframe').length > 0
  )
