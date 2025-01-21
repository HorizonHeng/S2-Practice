function printStar(a, b) {
  for (i = 1; i <= b; i++) {
    for (j = 1; j <= a; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
console.log(printStar(3, 4));
console.log(printStar(5, 2));
console.log(printStar(5, -2));
