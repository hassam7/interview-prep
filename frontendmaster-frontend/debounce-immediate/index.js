function debounce(fn, waitTime, immediate) {
  let timerId;
  return function() {
    const later = () => {
      timerId = null;
      if (!immediate) fn.apply(this, arguments);
    }
    const callNow = immediate && !timerId;
    clearTimeout(timerId);
    timerId = setTimeout(later, waitTime);
    if (callNow) fn.apply(this, arguments);
  }
}

module.exports = debounce;
