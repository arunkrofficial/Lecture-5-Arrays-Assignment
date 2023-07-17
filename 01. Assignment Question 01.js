function convertTo2D(original, m, n) {
    if (!Array.isArray(original) || typeof m !== 'number' || typeof n !== 'number') {
      return [];
    }
    const length = original.length;
  
    if (length !== m * n) {
      return [];
    }
  
    const result = [];
    let index = 0;
  
    for (let i = 0; i < m; i++) {
      const row = [];
  
      for (let j = 0; j < n; j++) {
        row.push(original[index]);
        index++;
      }
  
      result.push(row);
    }
  
    return result;
  }
  
  // Example usage
  const original = [1, 2, 3, 4];
  const m = 2;
  const n = 2;
  
  const result = convertTo2D(original, m, n);
  console.log(result);
  