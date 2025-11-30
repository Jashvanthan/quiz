let timeLeft = 120;  
let countdown = null;

function updateTimer(timeOver = false) {
  const timerEl = document.getElementById("timer");
  if (!timerEl) return;
  if (timeOver) {
    timerEl.innerText = "Time Over!";
    return;
  }
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.innerText = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}
if(timeLeft===0){
  alert("Time is over, please submit your quiz.");
}
function startCountdown() {
  const display = document.getElementById("section2");
  if (display) display.style.display = "flex";
  if (countdown !== null) return;  
  updateTimer();

  countdown = setInterval(function () {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      countdown = null;     
      timeLeft = 0;        
      updateTimer(true);   
      return;
    }

    updateTimer();
  }, 1000);
}


function shows() {
  const res = document.getElementById("result");
  if (!res) return;
  res.style.display = window.getComputedStyle(res).display === "flex" ? "none" : "flex";
}

function show() {
  const totalQuestions = 10;
  const checkedAnswers = document.querySelectorAll('input[type="radio"]:checked');
  let answeredNum = checkedAnswers.length;
  let notAnswered = totalQuestions - answeredNum;
  let wrong = 0;
  let negativeMarks = 0;
  let totalScore = 0;

  const score = document.getElementById("score");
  const scorev=document.getElementsByClassName("score");
  const answered= document.getElementById("answered");
  const notAnsweredre= document.getElementById("notanswer");
  const wrongAnswered= document.getElementById("wronganswer");
  const negative = document.getElementById("negativemark");
  const result= document.getElementById("result");
if(checkedAnswers.length===0){
  alert("You have not answered any questions. Please answer at least one question before submitting the quiz.");
  result.style.display="none";
  return;
}

  const keyAnswer = {
    q1: "38",
    q2: "chennai",
    q3: "28",
    q4: "dehli",
    q5: "Narendra modi",
    q6: "hyper text markup language",
    q7: "cascading style sheet",
    q8: "central processing unit",
    q9: "random access memory",
    q10: "uniform resource locator"
  };

  checkedAnswers.forEach(function (input) {
    const question = input.name;    
    const userAnswer = input.value;

    if (keyAnswer[question] && userAnswer === keyAnswer[question]) {
      totalScore += 5;
    } else {
      wrong++;
      negativeMarks += 2; 
    }
  });


  totalScore -= negativeMarks;
  if (totalScore < 0) {
    alert("your score is negative so we set it to zero,choose correct answers next time, good luck!");
    result.style.display="none";
    totalScore = 0;
  }

  if (!result) return;
  if (window.getComputedStyle(result).display === "flex") {
    result.style.display = "none";
  }
  else if(result==0){
    result.style.display = "none";
  }
   else {
    result.style.display = "flex";
    if(totalScore==50){
        score.textContent = "Score: " + totalScore + "/50\nCongratulations!";    
    }else{
    if (score) {score.textContent = "Score: " + totalScore + "/50";}}
    if (answered) answered.textContent = "Answered: " + answeredNum;
    if (notAnsweredre) notAnsweredre.textContent = "Not Answered: " + notAnswered;
    if (wrongAnswered) wrongAnswered.textContent = "Wrong Answered: " + wrong;
    if (negative) negative.textContent = "Negative Marks: " + negativeMarks;
  }
}
