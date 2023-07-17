function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return []; 
    }
  
    const frequency = new Map();
  
    for (const num of changed) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    const original = [];
  
    changed.sort((a, b) => a - b); 
  
    for (const num of changed) {
      if (frequency.get(num) === 0) {
        continue; 
      }
  
      const twiceNum = num * 2;
  
      if (!frequency.has(twiceNum) || frequency.get(twiceNum) === 0) {
        return []; 
      }
  
      original.push(num);
      frequency.set(num, frequency.get(num) - 1);
      frequency.set(twiceNum, frequency.get(twiceNum) - 1);
    }
  
    return original;
  }
  const changed = [1, 3, 4, 2, 6, 8];
const original = findOriginalArray(changed);
console.log(original);
