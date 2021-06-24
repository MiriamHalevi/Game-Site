var maxTime;
var score = 0;
var intervalTime;
var startbtn = document.getElementById("start");
var answer = document.getElementById("answer");
var one = document.getElementById("one");
var two = document.getElementById("two");
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var result = document.getElementById("result");
var time = document.getElementById("time");
const color = ['red', 'green', 'blue', 'yellow', 'black'];
var IsmeaningGood = "no";
startbtn.addEventListener('click', startgame);

function startgame() {

    score = 0;
    maxTime = 30;
    getQues();
    result.innerHTML = "";
    intervalTime = setInterval(onTimerTick, 1000);
    yes.addEventListener('click', check);
    no.addEventListener('click', check);
}
function onTimerTick() {
    maxTime--;

    if (maxTime <= 0) {

        endGame();
    }

    time.innerHTML = `0:${maxTime}`;
}
function getRandom() {
    return Math.floor(Math.random() * 5);

}
function check(ev) {
    console.log(IsmeaningGood)
    console.log(ev.target.value)
    console.log(IsmeaningGood == ev.target.value)
    console.log("------------------")
    if (ev.target.value == IsmeaningGood) {
        answer.innerHTML = "good!";
        score += 5;
    }
    else {

        answer.innerHTML = "wrong!";
    }

    setTimeout(getQues, 500);
}
function getQues() {
    answer.innerHTML = "";

    let onetext = color[getRandom()];
    let twoText = color[getRandom()];
    let twoColor = color[getRandom()];
    one.innerHTML = onetext;
    two.innerHTML = twoText;
    two.style.color = twoColor;
    console.log(onetext, twoColor)
    IsmeaningGood = onetext === twoColor ? "yes" : "no";


}
function endGame() {
    clearInterval(intervalTime);
    one.innerHTML = "";
    two.innerHTML = "";
    result.innerHTML = `you got ${score} point in 30 secounds.`;
    yes.removeEventListener('click', check);
    no.removeEventListener('click', check);
}