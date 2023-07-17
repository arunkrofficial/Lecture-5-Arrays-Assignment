function findDisjoint(nums1, nums2) {
    const set1 = new Set(nums1); // Create a set from nums1
    const set2 = new Set(nums2); // Create a set from nums2
  
    const distinct1 = nums1.filter(num => !set2.has(num)); // Find distinct nums1 elements not present in nums2
    const distinct2 = nums2.filter(num => !set1.has(num)); // Find distinct nums2 elements not present in nums1
  
    return [distinct1, distinct2];
  }
  const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const result = findDisjoint(nums1, nums2);
console.log(result);
