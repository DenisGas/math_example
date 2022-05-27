const example = document.querySelector(".example");
const answer = document.querySelector(".answer");
const check = document.querySelector(".check");
const scoreSpan = document.querySelector(".score");
const restore = document.querySelector(".restore");
const levelList = document.querySelectorAll(".level");
for (let i = 0; i < levelList.length; i++) {
  levelList[i].onclick = function(){
    level = this.innerHTML
    start()
  };

}
const myStorage = window.localStorage;
let userdata;
let score = 0;
let firstNumber = 25;
let operands = ['-',"+"];
let secondNumber = 20;
let value;
let operand;
let level = 1;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

start()

restore.onclick = function() {
  let cat = localStorage.getItem('score');
  if (cat == undefined){
    score = 0
  }else{
    score = Number(cat);
    console.log(score);
  }
}

function start(){
  op = getRandomInt(0,2);
  operand = operands[op];
  levels()
}



function levels() {
  if (level == 1){
    firstNumber = getRandomInt(1,10);
    secondNumber = getRandomInt(1,10)
    bal = 1;
  }else if(level == 2){
    firstNumber = getRandomInt(10,91)+getRandomInt(1,10);
    secondNumber = getRandomInt(1,10)
    bal = 2;
  }else if(level == 3){
    firstNumber = getRandomInt(10,91)+getRandomInt(1,10);
    secondNumber =  getRandomInt(10,91)+getRandomInt(1,10);
    bal = 3;
  }
  userdata = (firstNumber+operand+secondNumber);
  scoreSpan.innerHTML = score;
  example.innerHTML = (userdata);
}


check.onclick = function(){
  value = Number(answer.value);
  val = eval(firstNumber+operand+secondNumber);
  if (value === val){
    answer.style.background = '#53db9c';
    answer.style.transition = '0.5s';
    score += bal;
    start();
  }else{
    answer.style.transition = '0.5s';
    answer.style.background = '#db5353';
  }
  answer.value = '';
  myStorage.setItem('score', score);

}

