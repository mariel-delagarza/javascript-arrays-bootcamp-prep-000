var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
function addElementToBeginningOfArray(array, item) {
    var newArray = array;
    newArray.push(item);
    return newArray;
      }
  function destructiveAddElementToBeginningOfArray(array, item) {
    array.unshift(item);
    return array;
  }