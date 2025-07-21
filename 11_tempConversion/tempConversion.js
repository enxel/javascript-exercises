const convertToCelsius = function(F) {
  let C = (F - 32) * 5 / 9;
  if (C !== 0) {
    C = parseFloat(C.toFixed(1));
  }

  return C;
};

const convertToFahrenheit = function(C) {
  let F = C * 9 / 5 + 32;
  if (F !== 0) {
    F = parseFloat(F.toFixed(1));
  }

  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
