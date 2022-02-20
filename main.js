document.write("<h1> Do it 자바스크립트 예제입니다. </h1>");

document.write("-------------------------------------------------------","<br>");
document.write("Hello World","<br>");

document.write("-------------------------------------------------------","<br>");
let  plus;
plus = 100;
document.write(plus,"<br>");

plus = 200;
let p2 = plus+plus; 
document.write(p2,"<br>");
document.write("-------------------------------------------------------","<br>");
let text_js;
text_js =  "이것은 문자열 예제"
document.write(text_js);  //그냥 출력했을때
let text_js2 = "태그로<br>인식하는지 테스트</br>" //내용에 태그넣고 따옴표 넣으면 되는구먼
document.write(text_js2);  //태그 지정하고 출력했을때
document.write("-------------------------------------------------------","<br><br>");

document.write("-------------------| 블리언 |--------------------------","<br>");
//불리언을 보자
let a = true;
let b = false;
let c = 10>5;   //참이다
let d =  Boolean(null); // 거짓이다

document.write(a,"<br>");
document.write(b,"<br>");
document.write(c,"<br>");
document.write(d,"<br>");

document.write("-------------------------------------------------------","<br><br>");

document.write("-------------------| 변수타입 |--------------------------","<br>");
// 타입을 출력해보자

let a1= "<br>그냥 글자야"
let b1= 1025923

// 그냥출력하면
document.write(a1,"<br>");
document.write(b1,"<br>");

//타입형태를 알기위해 출력
document.write(typeof a1,"<br>");
document.write(typeof b1,"<br>");
document.write("-------------------------------------------------------","<br><br>");

document.write("-------------------| 대입연산자 |--------------------------","<br>");
// 이번에는 대입연산자를 해볼께여
let sip = 10;
let e_sip = 20;
let sam_sip = 30;
let il = 1;
let lee = 2;
let sam = 3;

document.write("<br>",sip,"<br>");
document.write(e_sip,"<br>");
document.write(sam_sip,"<br>");
document.write(sip+sam_sip,"<br>");
document.write(sip+il+lee+sam,"<br>");

let sa = ++sam;
document.write(sa,"<br>");
document.write("-------------------------------------------------------","<br><br>");

document.write("-------------------| 논라연산자 |--------------------------","<br>");
// 그래 기초니까 논리연산자도 해보자
let result1;

result1 = sip+e_sip == sam_sip;
result2 = sip+lee == sam_sip;
document.write(result1,"<br>");
document.write(result2,"<br>");
document.write("-------------------------------------------------------","<br><br>");

document.write("-------------------| 첫예제 |--------------------------","<br>");
// 첫번째 예제
let weight = 100;
let height = 184;
let result = (height-100)*0.9;
document.write("<h5>BMI구하는식은?</h5><br>   (키-100);*0.9 <br>");;
document.write("-------------------------------------------------------","<br><br>");

document.write("-------------------| 조건문 if |--------------------------","<br>");

// let how_walk=prompt("당신의 하루 걸음수는?","");
// if (how_walk > 1000){
//     document.write("당신은 많이 걷네요");
// }
// document.write("좀 더 노력하세요");





