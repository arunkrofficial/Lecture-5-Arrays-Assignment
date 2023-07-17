function completeRows(n) {
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
  }
  const n = 5;
  const result = completeRows(n);
  console.log(result);
    