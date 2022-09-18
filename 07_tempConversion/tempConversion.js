const ftoc = function(fahrenTemp) {
  celsiusTemp = (fahrenTemp - 32) * (5/9);
  celsiusTemp.toFixed(2);
  celsiusTemp *= 10;
  celsiusTemp = Math.round(celsiusTemp);
  celsiusTemp /= 10;
  return celsiusTemp;
};

const ctof = function(celsiusTemp) {
  fahrenTemp = (celsiusTemp * (9/5)) + 32;
  fahrenTemp.toFixed(2);
  fahrenTemp *= 10;
  fahrenTemp = Math.round(fahrenTemp);
  fahrenTemp /= 10;
  return fahrenTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
