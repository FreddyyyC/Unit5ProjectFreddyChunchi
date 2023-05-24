let title = document.querySelector(".title");
let questionOne = document.querySelector(".questions");
let questionTwo = document.querySelector(".questions2");
let result = document.querySelector(".result");
let next = document.querySelector(".Next");
let oneHour = document.querySelector(".one-hour");
let twoHour = document.querySelector(".two-hour");
let threeHour = document.querySelector(".three-hour");
let fourHour = document.querySelector(".four-hour");
let fiveHour = document.querySelector(".five-hour");
let expensive = document.querySelector(".Expensive");
let lowCost = document.querySelector(".low-cost");

next.onkeydown=function(){
  
  questionOne.style.display="block";
  title.style.display="none";
  
};

oneHour.onkeydown=function(){

  questionTwo.style.diplay="block";
  questionOne.style.display="none";
  
};

twoHour.onkeydown=function(){

  questionTwo.style.diplay="block";
  questionOne.style.display="none";
  
};

threeHour.onkeydown=function(){

  questionTwo.style.diplay="block";
  questionOne.style.display="none";
  
};

fourHour.onkeydown=function(){

  questionTwo.style.diplay="block";
  questionOne.style.display="none";
  
};

fiveHour.onkeydown=function(){

  questionTwo.style.diplay="block";
  questionOne.style.display="none";
  
};

expensive.onkeydown=function(){

  result.style.display="block"
  questionTwo.style.display="none"
  
}

lowCost.onkeydown=function(){

  result.style.display="block"
  questionTwo.style.display="none"
  
  
}