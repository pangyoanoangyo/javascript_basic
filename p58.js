let pro_avg=(150+150+150)/3;
let pro2_avg=(100+100+100)/3;

let pro_q4 = prompt("4분기 제품실적은?","");
let pro2_q4 = prompt("4분기 상품실적은?","");

let pro_q4_result = pro_avg >= pro_q4 && pro_avg > pro_q4;
pro_q4_result = pro_q4_result? "형편없네요" : "괜찮네요";
let pro2_q4_result = pro2_avg >= pro2_q4 && pro2_avg > pro2_q4;
pro2_q4_result = pro2_q4_result? "형편없네요" : "괜찮네요";

document.write("우리 평균은 제품"+pro_avg+"이고 상품은"+pro2_avg+"입니다.","<br>");
document.write("4분기 제품실적인"+pro_q4+"은"+pro_q4_result,"<br>");
document.write("4분기 상품실적인"+pro2_q4+"은"+pro2_q4_result);
50