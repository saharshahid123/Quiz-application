const quizQuestions = [
    {
        question: ' How many times can you subtract 5 from 25?',
        opt1: 'Once',
        opt2: 'Infinite',
        opt3: '25 times',
        opt4: '5 times',
        correct: 'Once',
    },
    {
        question: 'What has keys but no locks, space but no room?',
        opt1: 'Door',
        opt2: 'Map',
        opt3: 'Keyboard',
        opt4: 'Box',
        correct: 'Keyboard',
    },
    {
        question: 'What word is always spelled wrong?',
        opt1: 'No',
        opt2: 'Wrong',
        opt3: 'Mistake',
        opt4: 'right',
        correct: 'Wrong',
    },
    {
        question: 'If 1=3, 2=3, 3=5, 4=4, 5=4, what does 6=?',
        opt1: '5',
        opt2: '2',
        opt3: '6',
        opt4: '3',
        correct: '3',
    },
    {
        question: 'The more you take, the more you leave behind. What am I?',
        opt1: 'Money',
        opt2: 'Footsteps',
        opt3: 'Time',
        opt4: 'Photos',
        correct: 'Footsteps',
    },
    {
        question: 'Which word doesnot belong: Apple, Grape, Banana, Cherry?',
        opt1: 'Grape',
        opt2: 'Banana',
        opt3: 'Apple',
        opt4: 'Cherry',
        correct: 'Banana',
    },

];

let quizContainer = document.getElementById('quizContainer');
let index = 0;
let nextBtn = document.getElementById('next');
let score = 0;

function showQuestion() {
    if (quizQuestions.length == index) {
        // quizContainer.innerHTML = `<h1>Quiz Completed</h1><h3>You scored ${score} out of ${quizQuestions.length}</h3>`;
        if (score >= 5) {
            quizContainer.innerHTML = `<h1>Quiz Completed</h1><h3>You scored ${score} out of ${quizQuestions.length} <br> Good Job!!</h3>`
        }
        else {
            if (score <= 4 && score >= 2) {
                quizContainer.innerHTML = `<h1>Quiz Completed</h1><h3>You scored ${score} out of ${quizQuestions.length} <br> You need to improve...</h3>`
            }
            else {
                quizContainer.innerHTML = `<h1>Quiz Completed</h1><h3>You scored ${score} out of ${quizQuestions.length} <br> You failed, better luck next time.</h3>`
            }
        }
        nextBtn.style.display = 'none';
    } else {
        nextBtn.disabled = true;

        quizContainer.innerHTML = `<div>
<h1>Question # ${index + 1}</h1>
<h3>${quizQuestions[index].question}</h3>
<label>
<input   type="radio" value="${quizQuestions[index].opt1}" name = "options" />
<span>${quizQuestions[index].opt1} </span>
</label>
<br />
<label>
<input   type="radio"  value="${quizQuestions[index].opt2}" name = "options"/>
<span>${quizQuestions[index].opt2} </span>
</label>
<br />
<label>
<input   type="radio" value="${quizQuestions[index].opt3}" name = "options" />
<span>${quizQuestions[index].opt3} </span>
</label>
<br />
<label>
<input   type="radio" value="${quizQuestions[index].opt4}"  name = "options"/>
<span>${quizQuestions[index].opt4} </span>
</label>
</div>`;
        let options = document.getElementsByName('options');
        for (var i = 0; i < options.length; i++) {
            options[i].addEventListener('click', function () {
                nextBtn.disabled = false;
            });
        }
    }
}
showQuestion();

let options = document.getElementsByName('options');
nextBtn.addEventListener('click', function () {
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            let currentAns = options[i].value;
            let correctAns = quizQuestions[index].correct;
            console.log('user selected', currentAns);
            console.log('obj key', correctAns);
            if (currentAns == correctAns) {
                score++;
            }
        }
    }
    index++;
    showQuestion();
});