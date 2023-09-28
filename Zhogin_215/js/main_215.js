"use strict"
//Выполнил Жогин Дмитрий 3ИСИП-821

//Практика на функции в JavaScript
//Задание 215

//№1
function getMassivSum(arr){
    let sum = 0;
    for (let elem of arr){
        sum += elem
    }
    return sum
}
console.log(getMassivSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//№2
function getDivision(num){
    let arr = [];
    for (let i = 0; i < num; i++){
        if (num % i === 0){
            arr.push(i)
        }
    }
    return arr
}
console.log(getDivision(200));

//№3
function getMassiv(str){
    let arr = str.split('')
    return arr
}
console.log(getMassiv('abcdefg'));

//№4
function getReversed(str){
    let arr = str.split('');
    let arr2 = arr.reverse();
    let res = arr2.join('')
    return res
}
console.log(getReversed('abcdefg'));

//№5
function getUpperCase(str){
    let res = str.slice(0,1).toUpperCase() + str.slice(1);
    return res
}
console.log(getUpperCase('dmitrii'));

//№6
function getUpperEveryCase(str){
    let arr = str.split(' ')
    let arr2 = []
    let res = ''
    for(let i = 0; i < arr.length; i++){
        let word = arr[i];
        res = word.slice(0,1).toUpperCase() + word.slice(1);
        arr2.push(res)
    }
    return arr2;
}
console.log(getUpperEveryCase('dmitrii zhogin'));

//№7
function getNumPush(num){
    let Arr = [];
    for (let i = 1; i <= num; i++){
        Arr.push(i);
    }
    return Arr
}
console.log(getNumPush(10));

//№8
function getSum(num){
    let str = num.toString();
    let arr = str.split('');
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i])
    }
    return sum
}
console.log(getSum(12345));

//№9
function getYear(num){
    if (num % 4 === 0){
        return('Високосный');
    } else{
        return('Невисокосный')
    }
}
console.log(getYear(2024));

//№10
function getSecInDay(num){
    let day = num / 86400;
    return day;
}
console.log(getSecInDay(259200));

//№11
let arr = ['a', 'b', 'c', 'd', 1, 2, 3, 4, 5]
function getRandom(){
    let i = Math.floor(Math.random() * (arr.length));
    return arr[i];
}
console.log(getRandom(arr));

//№12
function getPrimeNumber(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        if (num % i === 0){
            sum++
        }
    }
    if(sum > 2){
        return 'Не простое';
    } else {
        return 'Простое';
    }
}
console.log(getPrimeNumber(101));