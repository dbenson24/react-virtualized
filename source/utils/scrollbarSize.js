let size;

/**
 * Calculates the size of the scrollbar.
 * If this function is called from an iFrame with access
 * to the parent documents DOM it uses the parents
 * DOM.
 */
export default function scrollbarSize(recalc) {
  if ((!size && size !== 0) || recalc) {
    let doc = undefined;
    if (
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    ) {
      doc = window.document;
    }
    // if in an iFrame and have access to parent DOM, calculate the scrollbar
    // using the parent DOM
    if (parent && parent.document && parent.document.createElement) {
      doc = parent.document;
    }
    if (doc) {
      var scrollDiv = doc.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      doc.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      doc.body.removeChild(scrollDiv);
    }
  }
  return size;
}
