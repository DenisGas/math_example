const example = document.querySelector(".example");
const answer = document.querySelector(".answer");
const check = document.querySelector(".check");
const scoreSpan = document.querySelector(".score");

let score = 0;
let firstNumber = 25;
let operand = '-';
let secondNumber = 20;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

start()


function start() {
  firstNumber = getRandomInt(1,10);
  operand = "+";
  secondNumber = getRandomInt(1,10)
  scoreSpan.innerHTML = score;


  let userdata = (firstNumber+operand+secondNumber);
  example.innerHTML = (userdata);
}



let value;

check.onclick = function(){
  value = Number(answer.value);
  val = eval(firstNumber+operand+secondNumber);
  if (value === val){
    answer.style.background = '#53db9c';
    answer.style.transition = '0.5s';
    score++;
    start();
  }else{
    answer.style.transition = '0.5s';
    answer.style.background = '#db5353';
  }
  answer.value = '';

}

