/*

Declare three variables a b and c.
If a's value is 3, b's value is 5 and c doesn't have a vlaue, aler
 */

let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\nlet b = 5;\nlet c;\n----------------';

output = output + '\na + b = ' + (a + b) + '\na - b = ' +(a - b) + '\na * b = ' +(a * b) + '\na / b = ' +(a / b)
+ '\na % b = ' +(a % b) + '\na += b = ' +(a += b) + '\na -= b = ' +(a -= b) + '\na *= b = ' +(a *= b) + '\na /= b = ' +(a /= b)
+ '\na %= b = ' +(a %= b) + '\na == b = ' +(a == b) + '\na != b = ' +(a != b) + '\na > b = ' +(a > b) + '\na < b = ' +(a < b)
+ '\n!a && !c = ' +(!a && !c) + '\n!a || !c = ' +(!a || !c);

alert(output);



// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/