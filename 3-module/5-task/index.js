function getMinMax(str) {
  let newArr = str.split(" ").filter(item => !isNaN(item));
  let minValue = Math.min(...newArr);
  let maxValue = Math.max(...newArr);
  return result = {
    min: minValue,
    max: maxValue
  };
}
