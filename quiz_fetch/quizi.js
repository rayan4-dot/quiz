let questions = [];
let current = 0;
let resulta = 0;

const dispQ = document.getElementById("question");
const trueQuestion = document.getElementById("true-btn");
const falsQuestion = document.getElementById("false-btn");
const score = document.getElementById("score");



function shuffle(questions) {
    let crr = questions.length;
    while (crr != 0) {
        let random = Math.floor(Math.random() * crr);
        crr--;
        [questions[crr], questions[random]] = [questions[random], questions[crr]];
    }
}   



function displayQuestion() {
    const currentQuestion = questions[current];
    dispQ.textContent = currentQuestion.question;
}

function checkAnswer(isTrue) {
    const correctAnswer = questions[current].answer;

    if (isTrue === correctAnswer) { 
        resulta++;
    }

    current++;

    if (current < questions.length) {
        displayQuestion();  
    } else {
        showResult();  
    }
}

function showResult() {
    score.textContent = `Final score: ${resulta} / ${questions.length}`;

}

trueQuestion.addEventListener("click", () => checkAnswer(true));
falsQuestion.addEventListener("click", () => checkAnswer(false));


function loadQuestions() {
    fetch("question.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement des questions");
            }
            return response.json();
        })
        .then((data) => {
            questions = data; 
            shuffle(questions); 
            displayQuestion(); 
        })
        .catch((error) => {
            console.error("Erreur:", error);
        });
}

loadQuestions();
