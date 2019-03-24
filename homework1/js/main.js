let string="some test string";
/*Получить первую и последнюю буквы строки*/
alert( string.charAt(0) );
alert( string.slice(-1));
/*Сделать первую и последнюю буквы в верхнем регистре*/
alert( string[0].toUpperCase ());
alert( string.slice(-1).toUpperCase ());
/*Найти положение слова ‘string’ в строке*/
alert( string.indexOf("string") );
/*Найти положение второго пробела*/
alert( string.lastIndexOf(" "));
/*Получить строку с 5-го символа длиной 4 буквы*/
alert ( string.substr(5,4));
/*Получить строку с 5-го по 9-й символы*/
alert ( string.substring(5, 9));
/*Получить новую строку из исходной путем удаления последних 6-и символов*/
alert ( string.slice(0, -6));
/*Из двух переменных a=20 и b=16 получить переменную string, в которой будет
содержаться текст “2016”*/
const a = "20";
const b = "16";
alert (a + b);
/*Получить число pi из Math и округлить его до 2-х знаков после точки*/
alert (Math.PI.toFixed(2));
/*Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12,
51, 12, 13, 51*/
var array = [15, 11, 16, 12, 51, 12, 13, 51];
alert (Math.max.apply(Math, array));
alert (Math.min.apply(Math, array));
/*Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число.*/
alert (Math.random().toFixed(2));
var n=0, x=210;
alert (Math.floor(Math.random()*(x-n+1))+n);
/*второй вариант решения именно c min max*/
function randomInteger(min,max) {
    var rand = min+Math.random() * (max + 1-min);
    rand = Math.floor(rand);
    return rand;
}
alert( randomInteger(0,50));
/*Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)*/
var m=0.6+0.7
alert(isFinite(m));
alert(+m);
/*Получить число из строки ‘100$’*/
alert( parseInt('100$'));



