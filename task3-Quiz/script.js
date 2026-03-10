const quiz = [

{
question:"Which language is used for web development?",
answers:["Python","JavaScript","C++","Java"],
correct:1
},

{
question:"HTML stands for?",
answers:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyperlinks Text Mark Language",
"None"
],
correct:0
},

{
question:"Which is used for styling web pages?",
answers:["HTML","CSS","Python","C++"],
correct:1
}

];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("next");

function loadQuestion(){

let q = quiz[currentQuestion];

questionEl.innerText = q.question;

answerButtons.forEach((btn,index)=>{
btn.innerText = q.answers[index];

btn.onclick = function(){

if(index === q.correct){
score++;
alert("Correct!");
}
else{
alert("Wrong!");
}

};

});

}

nextBtn.onclick = function(){

currentQuestion++;

if(currentQuestion < quiz.length){
loadQuestion();
}
else{
document.querySelector(".quiz-container").innerHTML =
"<h2>Your Score: " + score + "</h2>";
}

};

loadQuestion();