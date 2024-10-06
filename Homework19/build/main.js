"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var data = [undefined, 2, 3, 4, 5, 'sd'];
var func = function func() {
  var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Error";
  var second = arguments.length > 1 ? arguments[1] : undefined;
  var third = arguments.length > 2 ? arguments[2] : undefined;
  for (var _len = arguments.length, others = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    others[_key - 3] = arguments[_key];
  }
  if (arguments.length < 5) {
    console.log('Error');
  }
  ;
  console.log("".concat(first, "-").concat(second, "-").concat(third));
  console.log(_objectSpread({}, others));
};
func.apply(void 0, data);