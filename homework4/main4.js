// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать
// их произведение: multiply(1,2,3) = 6 (1*2*3)

function multiply() {
    var s = 1;
    if(arguments.length==0){
        return 0;
    }
    for(var i=0; i<arguments.length; i++) {
        s *= arguments[i];
    }
    return s
}
multiply(1,2,3)

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// reverseString(‘test’) // “tset”.
function reverseString(str) {
    var newString = "";
    for (var i = str.length-1; i>=0; i--){
        newString+= str[i];
    }
    return newString;
}
reverseString('test')

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
//     где каждый символ разделен пробелом и заменен на юникод-значение символа:
//     getCodeStringFromText(‘hello’) // “104 101 108 108 111”

function getCodeStringFrom(newString) {
    var splits = newString.split("");
    var strEnd = "";
    for (var i = 0; i<splits.length; i++) {
        let oneSum = splits[i];
        let uniCode = oneSum.charCodeAt()+" ";

        strEnd +=uniCode

    }
    return strEnd;
}
getCodeStringFrom("hello")

// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что
// число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
// переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
// ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные
// числа.

function guessWhy (n){
    if(10< arguments.length){
        return console.log('error');
    }
    if(0> arguments.length){
        return console.log('error');
    }
        var min = 1;
        var max = 10;
        var ranNumb = Math.floor(Math.random() * (max - min + 1)) + min;
        if(n===ranNumb){
            return alert('Вы выиграли')
        } else{
            return alert('Вы не угадали ваше число'+' ' +n+' '+'а выпало число'+' '+' '+ranNumb)
        }

    }
     guessWhy(5);

//второй вариант для себя

function randomNumber(value) {
    value = prompt("А какое число выберешь ты?");
    let random = Math.floor(Math.random(0, 10)*10);

    if (value == random) {
        alert("Вы выиграли");
    } else {
        alert("Вы не угадали ваше число " + value + " а выпало число " + random);
    }

    return value;
}

randomNumber();

// 5. Создать функцию, которая принимает число y и возвращает массив, заполненный числами от 1 до
// y: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(y) {
    var res = [];
        for (var i = 1; i<= y; i++)
            res.push(i);
            return res;

}
console.log(getArray(10));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными
// // элементами входного массива:
// //     doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr){
    var myArr = [];
    for (let i = 0; i<arr.length; i++){
        myArr.push(arr[i]);
    }
    let doubles = myArr.concat(arr);
    return console.log(doubles);

}

doubleArray([1,2,3]);

// 7.Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
// // // массива первый элемент, а возвращает массив из оставшихся значений:
// // //     changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function delArr() {
    var myArr = [];
    for (var i = 0; i < arguments.length; i++) {
        myArr[i] = arguments[i];
        myArr[i].shift()
        }
    return (myArr);
}
delArr([1,2,3,4],[5,6,7]);

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
// значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый
// массив с пользователями соответсвующие указанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

//не поняла как делать!

var users = [ {name: 'Denis', age: '29', gender: 'male'} , {name: 'Ivan', age: '20', gender: 'male'} , {name: 'Lena', age: '22', gender: 'female'}  ]

function funcGetUsers(users, gender, mail){
    var newArr = users.filter(function(number){
        if(users.gender = 'mail'){
            return
        }
    });



}
funcGetUser()

