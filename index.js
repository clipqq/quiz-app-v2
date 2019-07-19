const QUESTIONS = [{
    id: 1,
    content: `
<p>Which bridge connects San Francisco to Oakland?</p>
<ul>
<label><input type="radio" name="option" value="option1" required> Golden Gate Bridge<br></label>
<label><input type="radio" name="option" value="option2"> Bay Bridge<br></label>
<label><input type="radio" name="option" value="option3"> Dumbarton Bridge <br></label>
<label><input type="radio" name="option" value="option4"> Richmond Bridge<br></label>
</ul>
`,
    answer: "option1",
    answerString: 'Golden Gate Bridge'
  },
  {
    id: 2,
    content: `
<p>What is the name of the fog in San Francisco?</p>
<ul>
<label><input type="radio" name="option" value="option1" required> Albert<br></label>
<label><input type="radio" name="option" value="option2"> Richard<br></label>
<label><input type="radio" name="option" value="option3"> Karl <br></label>
<label><input type="radio" name="option" value="option4"> John<br></label>
</ul>
`,
    answer: "option3",
    answerString: 'Karl'
  },
  {
    id: 3,
    content: `
<p>What is the airport code for San Francisco?</p>
<ul>
<label><input type="radio" name="option" value="option1" required> SFO<br></label>
<label><input type="radio" name="option" value="option2"> SFX<br></label>
<label><input type="radio" name="option" value="option3"> SNF <br></label>
<label><input type="radio" name="option" value="option4"> SAN<br></label>
</ul>
`,
    answer: "option1",
    answerString: 'SFO'

  },
  {
    id: 4,
    content: `
<p>Golden Gate Park is located south of what neighborhood?</p>
<ul>
<label><input type="radio" name="option" value="option1" required> Sunset<br></label>
<label><input type="radio" name="option" value="option2"> Haight Ashbury<br></label>
<label><input type="radio" name="option" value="option3"> SOMA <br></label>
<label><input type="radio" name="option" value="option4"> Richmond<br></label>
</ul>
`,
    answer: "option4",
    answerString: 'Richmond'
  },
  {
    id: 5,
    content: `
<p>What is the tallest building in San Francisco?</p>
<ul>
<label><input type="radio" name="option" value="option1" required> Salesforce Tower<br></label>
<label><input type="radio" name="option" value="option2"> Transamerica Building<br></label>
<label><input type="radio" name="option" value="option3"> Bank of America Tower <br></label>
<label><input type="radio" name="option" value="option4"> Apple Spaceship<br></label>
</ul>
`,
    answer: "option1",
    answerString: 'Salesforce Tower'
  },
  {
    id: 6,
    content: `
<p>The Marina neighborhood is home to this San Francisco landmark:</p>
<ul>
<label><input type="radio" name="option" value="option1" required> San Francisco Zoo<br></label>
<label><input type="radio" name="option" value="option2"> Sutro Tower<br></label>
<label><input type="radio" name="option" value="option3"> De Young Museum <br></label>
<label><input type="radio" name="option" value="option4"> Palace of Fine Arts<br></label>
</ul>
`,
    answer: "option4",
    answerString: 'Palace of Fine Arts'
  },
  {
    id: 7,
    content: `
<p>The 49ers used to play at this location before moving to Santa Clara:</p>
<ul>
<label><input type="radio" name="option" value="option1" required> AT&T Park<br></label>
<label><input type="radio" name="option" value="option2"> Candlestick Park<br></label>
<label><input type="radio" name="option" value="option3"> Oracle Arena <br></label>
<label><input type="radio" name="option" value="option4"> Stern Grove<br></label>
</ul>
`,
    answer: "option2",
    answerString: 'Candlestick Park'
  },
  {
    id: 8,
    content: `
<p>What is the 4th item missing from this series: "Embarcadero, Montgomery, Powell"</p>
<ul>
<label><input type="radio" name="option" value="option1" required> Balboa Park<br></label>
<label><input type="radio" name="option" value="option2"> Fremont<br></label>
<label><input type="radio" name="option" value="option3"> Civic Center <br></label>
<label><input type="radio" name="option" value="option4"> Church<br></label>
</ul>
`,
    answer: "option3",
    answerString: 'Civic Center'
  },
  {
    id: 9,
    content: `
<p>Which of these famous startups is not headquartered in San Francisco?</p>
<ul>
<label><input type="radio" name="option" value="option1" required> Airbnb<br></label>
<label><input type="radio" name="option" value="option2"> Uber<br></label>
<label><input type="radio" name="option" value="option3"> Twitter <br></label>
<label><input type="radio" name="option" value="option4"> Facebook<br></label>
</ul>
`,
    answer: "option4",
    answerString: 'Facebook'
  },
  {
    id: 10,
    content: `
<p>Golden Gate Park hosts what yearly music festival?</p>
<ul>
<label><input type="radio" name="option" value="option1" required> Aftershock<br></label>
<label><input type="radio" name="option" value="option2"> EDC San Francisco<br></label>
<label><input type="radio" name="option" value="option3"> Outside Lands <br></label>
<label><input type="radio" name="option" value="option4"> Treasure Island Music Festival<br></label>
</ul>
`,
    answer: "option2",
    answerString: 'Outside Lands'
  }
]

let QUESTIONNUM = 0
let SCORE = 0
const customResultsText = [
  'Hella good! Your rank: "Veteran Muni driver"',
  'When people ask where you\'re from, you say SF. It\'s just easier, right?. Your rank: "Bay Area resident"',
  'You\'ve got a Clipper card and you\'re not afraid to use it. Your rank: "Tech commuter"',
  'Welcome to SF! . Your rank: "Segway riding tourist"'
]

// ===============================================================

function startQuiz() {
  $("main").on("click", ".start-btn", function(e) {
  	e.preventDefault()
    renderNewQuestion()
  })
}

//---------------------------------------------------------
function makeQuestionTemplate() {
  $(".quiz-area").html(`
    <form class='quiz-form'>
    ${QUESTIONS[QUESTIONNUM].content}
    </form>
    <button class='submit-answer-btn' type='button'>Submit</button>
  `)
}

//---------------------------------------------------------

function renderNewQuestion() {
  if (QUESTIONNUM < QUESTIONS.length) {
    console.log(`rendering new question #${QUESTIONNUM}`)
    makeQuestionTemplate()
    $('#question-count').html(`Question: ${QUESTIONNUM + 1} / 10`)
    checkAnswer()
  } else {
    console.log(QUESTIONNUM)
    renderFinalResults()
  }
}

//---------------------------------------------------------

function checkAnswer() {
   $('.submit-answer-btn').on('click', function(e) {
      let userAnswer = $('input:radio[name="option"]:checked').val() //$('input:checked').val()
      console.log(userAnswer)
      alert($('input:radio[name="option"]:checked').val());

    })
  console.log(`checking your answer ${userAnswer}`)
    if (QUESTIONS[QUESTIONNUM].answer === userAnswer) {
      triggerRightAnswer()
    } else {
      triggerWrongAnswer(QUESTIONS[QUESTIONNUM].answerString)
    }
}

//---------------------------------------------------------

function triggerRightAnswer() {
  console.log("correct!")
  SCORE++
  $('#score-count').html(`Score: ${SCORE}`)
  let postQuestionText = "That's right!"
  renderPostQuestion(postQuestionText)
}

//---------------------------------------------------------

function triggerWrongAnswer(answer) {
  console.log("wrong!")
  let postQuestionText = "Sorry... the correct answer is " + answer + "!"
  renderPostQuestion(postQuestionText)
}

//---------------------------------------------------------

function renderPostQuestion(postQuestionText) {
  $(".quiz-area").html(`
    <p>${postQuestionText}</p>
    <button class='next-btn' type='button'>Next</button>
  `)
  nextQuestion() 
}

//---------------------------------------------------------

function nextQuestion() {
  $('.next-btn').on('click', function(e) {
    QUESTIONNUM++
    renderNewQuestion()  
  })
}

//---------------------------------------------------------


function resetQuiz() {
  //listens for click on restart button
  // calls startQuiz()
  $(main).on('click', '.restart-btn', function(e) {
    $('.quiz-area').html('')
    QUESTIONNUM = 0
    renderIntro()
  })
}

//---------------------------------------------------------

function renderIntro() {
  $('.quiz-area').html(`
    <h1>Think you know San Francisco?</h1>
    <h1>Let's find out!</h1>
    <button type='button' class='start-btn'>Click to start</button>
`)
}

//---------------------------------------------------------

function renderFinalResults() {
  console.log("final results displayed")
  let resultMessage = ""
  if (SCORE > 9) {
    resultMessage = customResultsText[0]
  } else if (SCORE > 5) {
    resultMessage = customResultsText[1]
  } else if (SCORE > 2) {
    resultMessage = customResultsText[2]
  } else {
    resultMessage = customResultsText[3]
  }
  $(".quiz-area").html(`
    <h1>You scored ${SCORE} out of 10!
    ${resultMessage}</h1>
    <p>Would you like to try again?</p>
    <button class='restart-btn' type='button'>Restart</button>
  `)
  resetQuiz()
}

//---------------------------------------------------------




function main () {
  startQuiz()

}

$(main)