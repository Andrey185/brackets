// module.exports = function check(str, bracketsConfig) {
//     let brackets = bracketsConfig.join('').replace(/,/g, '');
//     let array = [];
//     let count = 0
//     for (let bracket of str) {
//             let bracketsIndex = brackets.indexOf(bracket)
//             array.push(bracketsIndex)
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0 && array[array.length - 1 - i] % 2 !== 0) {
//         count++
//         }
//         else if (array[i] % 2 !== 0 && array[array.length - 1 - i] % 2 == 0) {
//             count++
//             }
//     }
//     if (array.length-count*2==0) {
//         return true
//     } else{return false}
// }

module.exports = function check(str, bracketsConfig) {
    let list = bracketsConfig.join('').replace(/,/g, '');
    let array = [];
    for (let item of str) {
            let listIndex = list.indexOf(item)
            if (listIndex % 2 === 0) {
                
                if (item === list[listIndex + 1] && array[array.length - 1] === listIndex){
                    array.pop();
                } else if (item === list[listIndex + 1] && array[array.length - 1] !== listIndex) {
                    array.push(listIndex)
                }
                else{
                    array.push(listIndex)
                }
            } 
            else {
                if (array.pop() !== listIndex-1){
                    return false;
                }
            }
        }
        return array.length === 0
}


// function check(str, bracketsConfig) {
//     let brackets = bracketsConfig.join('').replace(/,/g, '');
//     let array = [];
//     let count = 0
//     for (let bracket of str) {
//             let bracketsIndex = brackets.indexOf(bracket)
//         console.log(bracketsIndex);
//         console.log(brackets[bracketsIndex + 1]);
//             array.push(bracketsIndex)
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0 && array[array.length - 1 - i] % 2 !== 0) {
//         count++
//         }
//         else if (array[i] % 2 !== 0 && array[array.length - 1 - i] % 2 == 0) {
//             count++
//             }
//     }
//     console.log(array.length);
//     console.log(count);
//     if (array.length === count * 2) {
//         return true
//     } else{return false}
// }

// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));
