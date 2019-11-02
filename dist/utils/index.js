export function serialize(obj) {
  var str = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key])));
    }
  }

  return str.length > 0 ? '?' + str.join('&') : '';
}