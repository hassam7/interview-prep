Function.prototype.newBind = function(context, ...params) {
  return () => {
    this.apply(context, params);
  }
}