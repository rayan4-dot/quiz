const questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: true },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];

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


shuffle(questions);
displayQuestion();