// 파이썬의 input = prompt

let weight = prompt("당신의 몸무게는?","");
let height = prompt("당신의 신장은?","");
let name = prompt("당신의 이름은?","");
let normal_bmi = (height-100)*0.9
let my_bmi= weight >= normal_bmi && weight <= normal_bmi;
my_bmi= my_bmi? "적정 체종입니다. 좋겠다야": "돼지입니다! 살빼라!"

document.write(name+"님은"+my_bmi);
