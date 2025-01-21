function countChar(string, ch) {
  let count = 0;
  for (let char of string) {
    if (char == ch) {
      count++;
    }
  }
  return count;
}
console.log(countChar("Hello world", "o"));
