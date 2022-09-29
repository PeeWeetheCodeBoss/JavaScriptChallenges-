//10. Return the number of vowels in a string

function countVowels(str) {
  return (str.match(/[aiueo]/gi) || []).length;
}
console.log(countVowels("abcdefghijklmnopqrstuvwxyz"));
