let a = 0 || 'string';// console.log(a) = string, because Boolean(0)=false Boolean(string)=true. If at least one of the two conditions is true, the result is the value that is true

let a = 1 && 'string';//string, because Boolean(1)=true Boolean(string)=true. If the two conditions is true, the result is the value that is last true

let a = null || 25;// 25, because Boolean(null)=false Boolean(25)=true. If at least one of the two conditions is true, the result is the value that is true

let a = null && 25; //null, because Boolean(null)=false Boolean(25)=true. JS stopped on false and show null

let a = null || 0 || 35; //35, because Boolean(null)=false Boolean(0)=false Boolean(35)=true. The result is the value that is e first true

let a = null && 0 && 35; //null, JS stopped on first false and show null.

12 + 14 + '12' // "2612", first, the arithmetic addition operation is performed, then the string is added
3 + 2 - '1' //4, first, the arithmetic addition operation is performed, then the "-" operator only works with numbers, so it immediately subtracted 1.


'3' + 2 - 1 // 31, the string 3 added 2 (32) then the "-" operator only works with numbers and converted to number 32, and subtracted 1.

true + 2 // 3, true converted to 1 and added 2

+'10' + 1 // 11, unary plus converted to number 10, then arithmetic addition operation is performed: 10+1

undefined + 2 // NaN, undefined = NaN and the result is NaN

null + 5 // 5, null=0, 0+5=5

true + undefined // NaN, true=1 undefined = NaN, 1+NaN=NaN


