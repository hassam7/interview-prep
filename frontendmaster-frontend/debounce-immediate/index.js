function debounce(fn, waitTime, immediate) {
  let timer;
  return function() {
    clearTimeout(timer);
    if (immediate && !timer) fn.call(this, ...arguments);

    timer = setTimeout(() => {
      timer = null
      if (!immediate) fn.call(this, ...arguments);
    }, waitTime);
  }
}

function debounceIm(fn, waitTime) {
  let timer;
  return function () {
    clearTimeout(timer);
    if (!timer) {
      fn.call(this, ...arguments);
    }
    timer = setTimeout(() => {
      if (!timer) fn.call(this, ...arguments);
      timer = null;
    }, waitTime);
  }
}

module.exports = debounce;


/*
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		//Moving this line above timeout assignment
		if (immediate && !timeout) func.apply(context, args);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
	};
};


*/