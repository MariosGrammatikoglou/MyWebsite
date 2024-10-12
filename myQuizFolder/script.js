const listOfQuestionsAnswers = [ 
    {
        question:"Who was the Ancient Greek God of the Sun ?",
        answers: [
            {text:"Eros",correct:false},
            {text:"Aether",correct:false},
            {text:"Poseidon",correct:false},
            {text:"Apollo",correct:true},
        ]
    },
    {
        question:"Aureolin is a shade of what color ?",
        answers: [
            {text:"Red",correct:false},
            {text:"Black",correct:false},
            {text:"Yellow",correct:true},
            {text:"Orange",correct:false},
        ]
    },
    {
        question:"What is acrophobia a fear of ? ",
        answers: [
            {text:"Heights",correct:true},
            {text:"Germs and dirt",correct:false},
            {text:"Enclosed Spaces",correct:false},
            {text:"Bathing or cleaning",correct:false},
        ]
    },
    {
        question:"What is the tallest type of tree ?",
        answers: [
            {text:"Redwood",correct:true},
            {text:"Basswood",correct:false},
            {text:"Gray Birch",correct:false},
            {text:"American Elm",correct:false},
        ]
    },
    {
        question:"What is the only flag that does not have four sides ?",
        answers: [
            {text:"Chad",correct:false},
            {text:"Iran",correct:false},
            {text:"Malta",correct:false},
            {text:"Nepal",correct:true},
        ]
    },
    {
        question:"How many bones do we have in an ear ?",
        answers: [
            {text:"1",correct:false},
            {text:"2",correct:false},
            {text:"3",correct:true},
            {text:"4",correct:false},
        ]
    },
    {
        question:"On which continent would you find the city of Baku ?",
        answers: [
            {text:"Asia",correct:true},
            {text:"Africa",correct:false},
            {text:"Europe",correct:false},
            {text:"America",correct:false},
        ]
    },
    {
        question:"How many hearts does an octopus have ?",
        answers: [
            {text:"1",correct:false},
            {text:"2",correct:false},
            {text:"3",correct:true},
            {text:"4",correct:false},
        ]
    },
    {
        question:"What year was the first iPhone released ?",
        answers: [
            {text:"2005",correct:false},
            {text:"2006",correct:false},
            {text:"2007",correct:true},
            {text:"2008",correct:false},
        ]
    },
    {
        question:"What is the national sport of Japan ?",
        answers: [
            {text:"Golf",correct:false},
            {text:"Hockey",correct:false},
            {text:"Lacrosse",correct:false},
            {text:"Sumo wrestling",correct:true},
        ]
    }
]

const questionElement=document.getElementById("questionArea");
const answersArea=document.getElementById("buttonArea");
const nextButtonElement=document.getElementById("nextButton");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButtonElement.style.width="70px";
    nextButtonElement.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetData();
    let currentQuestion=listOfQuestionsAnswers[currentQuestionIndex];
    let numberOfQuestion=currentQuestionIndex +1;
    questionElement.innerHTML=numberOfQuestion +". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text ;
        button.classList.add("answerBtn");
        answersArea.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectedButton);
    });
}



function resetData(){
    while(answersArea.firstChild){
        answersArea.removeChild(answersArea.firstChild);
    }
    nextButtonElement.style.display="none"; 
}

function selectedButton(e){
    const selectedButton=e.target;
    const isCorrect=selectedButton.dataset.correct==="true";
    if(isCorrect){
        selectedButton.classList.add("correctAnswer");
        score++;
    }else{
        selectedButton.classList.add("incorrectAnswer");
    }

    Array.from(answersArea.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correctAnswer");
        }
        button.disabled=true;
    });
    nextButtonElement.style.display="block";
}

nextButtonElement.addEventListener("click", ()=>{
    if(currentQuestionIndex<listOfQuestionsAnswers.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<listOfQuestionsAnswers.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetData();
    questionElement.innerHTML=`You scored ${score} out of ${listOfQuestionsAnswers.length}!`;
    nextButtonElement.innerHTML="Play Again";
    nextButtonElement.style.display="block";
}

startQuiz();