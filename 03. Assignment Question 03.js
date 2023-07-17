function sortedSquares(nums) {
    const squaredNums = nums.map(num => num * num); // Square each number
    squaredNums.sort((a, b) => a - b); // Sort in non-decreasing order
    return squaredNums;
  }
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result);
    