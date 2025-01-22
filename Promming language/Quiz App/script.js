document.getElementById('Insruction').style.display = 'none';
var score = 0;
var questions = [];
var currentQuestionIndex = 0;
var qustionContainer = document.getElementById('question');
var options = document.getElementById('options');
document.getElementById('quiz').style.display = 'none';

var StartQuiz = () => {
    document.getElementById('start-quiz').style.display = 'none';
    document.getElementById('Insruction').style.display = 'block';
}

var startQuizWithInstruction = () => {
    document.getElementById('Insruction').style.display = 'none';
    loadQuestions();
    startCountdown();
}

var loadQuestions = async () => {
    document.getElementById('quiz').style.display = 'block';
    var response = await fetch('questions.json');
    questions = await response.json();
    if (questions) {
        showQuestion();
    }
}

var timeLeft = 15;
var startCountdown = () => {
    var progressBar = document.getElementById("questionProgressBar");
    progressBar.style.width = "100%";
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("counting").textContent = timeLeft;
        const percentage = (timeLeft / 15) * 100;
        progressBar.style.width = percentage + "%";
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

var showQuestion = () => {
    if (questions.length > currentQuestionIndex) {
        var question = questions[currentQuestionIndex];
        qustionContainer.textContent = question.question;
        options.innerHTML = '';
        question.options.forEach((option, index) => {
            var li = document.createElement('li');
            li.innerHTML = `<input type="radio" name="option" id="option${index}" value="${index}"> <label for="option${index}">${option}</label>`;
            options.appendChild(li);
        });
        document.getElementById('nextButton').disabled = true;

        options.addEventListener('change', (e) => {
            if (e.target.name == 'option') {
                document.getElementById('nextButton').disabled = false;
            }
        });
    } else {
        showResult();
    }
    timeLeft = 15;
}

var showResult = () => {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `${score} Out Of ${questions.length}`;
}

var nextQuestion = () => {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    if (selectedOption) {
        if (selectedOption.value == questions[currentQuestionIndex].answer) {
            score++;
        }
    }
    currentQuestionIndex++;
    showQuestion();
    clearInterval(timer);
    startCountdown();
}

function restartQuestion() {
    clearInterval(timer);
    window.location.reload();
}

function resetQuiz() {
    window.location.reload();
}
