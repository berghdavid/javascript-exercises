const ftoc = function(f) {
  let c = 5 * (f - 32) / 9;
  return Math.round(10 * c) / 10;
}

const ctof = function(c) {
  let f = 32 + (9 * c / 5);
  return Math.round(10 * f) / 10;
}

module.exports = {
  ftoc,
  ctof
}
