// function first_last_1(nums)
// {
//   const end_pos = nums.length - 1;
//   return nums[0] == 1 || nums[end_pos] == 1;
// }




// console.log(first_last_1([1, 3, 5]));
// console.log(first_last_1([1, 3, 5, 1]));
// console.log(first_last_1([2, 4, 6]));



// const checkOneOrThree = function (x) {
//     return x!=1 && x!=3
// }

// const checkingFunction = function (array) {
//     console.log(array.forEach(checkOneOrThree))
// }

//true if the array doesnt have 1 or 3 in its elements
const checkingFunction2 = function (array) {
    
    let result = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1 || array[i] === 3) {
            result = false; 
            break
        }
    }
    return result;
}

console.log(checkingFunction2([2,2,2]));
console.log(checkingFunction2([2,2,2,3,'a']));
console.log(checkingFunction2([2,2,2,2,'a', "3"]));
console.log(checkingFunction2([2,2,1,2,'a', "3"]));

