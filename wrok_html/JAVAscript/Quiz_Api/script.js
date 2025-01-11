let show = document.querySelector('.btn');
let ans = document.querySelector('#first');
let Qus = document.querySelector('.Qus');
let sahi = document.getElementById('sahi');
let galat = document.getElementById('galat');
let correctAns = document.getElementById('secound');
let number = document.getElementById('marks');

let currentQuestionIndex = 0;
let quizData = [];
let marks = 0;

// Fetch quiz data and start quiz
const loadQuizData = async () => {
    try {
        const response = await fetch("QuizQuestion.json");
        quizData = await response.json();
        nextqus(); // Start quiz with the first question
    } catch (error) {
        Qus.textContent = "Failed to load quiz data.";
        console.error("Error fetching quiz data:", error);
    }
};

// Submit answer and show feedback
const getinfo = () => {
    if (quizData.length === 0 || currentQuestionIndex === 0) {
        ans.innerText = "Please start the quiz by clicking the 'Question>' button!";
        return;
    }

    const correctAnswer = quizData.quiz[currentQuestionIndex - 1].correct_option;
    const selectedOption = document.querySelector('input[type="radio"]:checked');

    if (!selectedOption) {
        ans.innerText = "Please select an answer!";
        return;
    }

    ans.innerText = `Your Ans: ${selectedOption.nextElementSibling.textContent}`;
    correctAns.innerText = `Correct Ans: ${correctAnswer}`;

    if (selectedOption.value === correctAnswer) {
        sahi.textContent = "You selected the right answer!";
        galat.textContent = "";
        marks += 3;
    } else {
        galat.textContent = "You selected the wrong answer!";
        sahi.textContent = "";
        marks -= 1;
    }

    // Show updated marks



    // Automatically load the next question after 1 second
    setTimeout(nextqus, 3000);
};

// Load next question or finish quiz
const nextqus = () => {
    if (currentQuestionIndex < quizData.quiz.length) {
        const item = quizData.quiz[currentQuestionIndex];
        Qus.textContent = `Question ${currentQuestionIndex + 1}: ${item.question}`;

        document.getElementById('rd1').value = item.options[0];
        document.getElementById('label1').textContent = item.options[0];

        document.getElementById('rd2').value = item.options[1];
        document.getElementById('label2').textContent = item.options[1];

        document.getElementById('rd3').value = item.options[2];
        document.getElementById('label3').textContent = item.options[2];

        document.getElementById('rd4').value = item.options[3];
        document.getElementById('label4').textContent = item.options[3];

        currentQuestionIndex++;
        ans.innerText = "Answer:";
        correctAns.innerText = "Correct Ans:";
        sahi.textContent = "";
        galat.textContent = "";

        // Uncheck radio buttons
        document.querySelectorAll('input[type="radio"]').forEach((radio) => {
            radio.checked = false;
        });
    } else {
        Qus.textContent = "Quiz Complete!";
        show.disabled = true;
        number.innerText = `Your total marks: ${marks}`;
    }
};

// Event listeners
show.addEventListener('click', getinfo);
window.addEventListener('load', loadQuizData);
