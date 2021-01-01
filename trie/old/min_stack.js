
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this._stack = [];
  this._minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this._minStack.length != 0) {
    const lastMinStackValue = this._minStack[this._minStack.length - 1];
    if (x < lastMinStackValue) this._minStack.push(x);
    else this._minStack.push(lastMinStackValue);
    this._stack.push(x);
  } else {
    this._stack.push(x);
    this._minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this._stack.pop();
  this._minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this._stack[this._stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this._minStack[this._minStack.length - 1];
};
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2
