/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 /* var twoSum = function(nums, target) {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices.has(complement)) {
            return [indices.get(complement), index]
        }

        indices.set(nums[index], index)
    }
}; */


var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
let num1 = [2,7,11,15];
document.write("The answer is:", twoSum(num1));






















/* 
const myDiv = document.createElement("div");
myDiv.style.width = "500px";
myDiv.style.height = "500px";
myDiv.style.border = "1px solid red";
document.body.appendChild(myDiv);
myDiv.addEventListener("mouseover", moveDiv);
function moveDiv(){
    let pixels = Math.floor(Math.random() * (150 - 30 + 1)) + 30;
    const direction = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    console.log(pixels, direction);
    if (direction == 1)
    {
        myDiv.style.marginTop = `${pixels}px`;
    }
    else if(direction == 2)
    {
        myDiv.style.marginRight = `${pixels}px`;
    }
    else if(direction == 3)
    {
        myDiv.style.marginBottom = `${pixels}px`;
    }
    else if(direction == 4)
    {

        myDiv.style.marginLeft = `${pixels}px`;
        
    }
} */


