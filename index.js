//первое задание:

// function cubeNumber (num){
//     return num*num*num
// }

// console.log(cubeNumber(2))

//второе задание:

// const salary = hjgkj //+prompt("введите размер заработной платы", "");
// function percentSalary(value) {
//   if (!isNaN(parseFloat(value)) && isFinite(value)) {
//     value = value * 0.13;
//   return  console.log(`ваш налог ${value}`)
//   }
//   else{
//   return console.log('вы ввели не число')
//   }
// }
//  percentSalary(salary)

//третье задание:
// const count1 = 8
// const count2 = 7
// const count3 = 9

// function maxCount (num1, num2, num3){
// if (num1>num2&&num1>num3) {
//     return num1
// }else if (num2>num1&&num2>num3) {
//     return num2
// }else if (num3>num1&&num3>num2) {
//     return num3
// }
// }
// console.log(maxCount(count1, count2, count3))

//четвёртое задание
const count1 = 8
const count2 = 10

function sumCount (count1, count2){
return count1 + count2
}
function diffCount (count1, count2){
    if (count1>count2) {
        return count1-count2
    }else{
        return count2-count1
    }
}
function multCount (count1, count2){
    return count1 * count2
}

function divCount (count1, count2){
     return count1/count2
}
console.log(sumCount(count1, count2), diffCount(count1, count2), multCount(count1, count2), divCount(count1, count2))