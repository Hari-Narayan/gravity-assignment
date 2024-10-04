function getTargetArray(nums, target) {
  if (!Array.isArray(nums) || nums.length < 2)
    return "Input must be an array with at least two elements.";

  const index = nums.findIndex((num) => num === target);

  if (index !== -1) return [index];

  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) return [numMap.get(complement), i];

    numMap.set(nums[i], i);
  }

  return "No solution available.";
}

const nums = [2, 7, 11, 15, 6, 26];
const target = 15;

console.log(getTargetArray(nums, target));
