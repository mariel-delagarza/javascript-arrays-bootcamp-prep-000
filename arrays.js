var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
function addElementToBeginningOfArray(1, foo) {
    var newArray = [1]
    newArray.push(foo);
    return newArray;
      }
  function destructiveAddElementToBeginningOfArray(array, item) {
    array.unshift(item);
    return array;
  }