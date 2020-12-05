function debounce(fn, waitTime) {
  let timerId;
  return function() {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn.apply(this, arguments);
    }, waitTime)
  }
}

module.exports = debounce;
