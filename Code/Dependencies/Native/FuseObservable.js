var observable = require("FuseJS/Observable");

function Observable() {
  return observable.apply(null, arguments);
}

module.exports = Observable;
