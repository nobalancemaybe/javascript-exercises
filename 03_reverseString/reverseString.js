const reverseString = function(string) {  
  return string.split('').reverse().join('')
// .split will return the string into an array(split('') will return array of all characters)
// .reverse will reverse an array
// .join will join an array into a string (join('') will join the array without adding anything)
}
// Do not edit below this line
module.exports = reverseString;
