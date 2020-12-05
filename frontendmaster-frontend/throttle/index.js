function throttle(fn, time) {
  let timerId;
  return function() {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      fn.appy(this, arguments);
      timerId = null;
    }, time);
  }
}
