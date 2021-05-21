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


let first_name = 'Yuhong';
let last_name = 'Zhou';
let email = 'zhou0200@algonquinlive.com';

output = 'My name is ' + first_name + ' ' + last_name + '. ' + 'You can contact me at ' + email + '.';

alert(output);

//My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
