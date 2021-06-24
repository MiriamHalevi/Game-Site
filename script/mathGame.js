const one = document.querySelector("div div:nth-child(1)");

const two = document.querySelector("div div:nth-child(3)");
const ans = document.querySelector("#ans");
const btn = document.querySelector("#sub");
const result = document.querySelector(".result");
const light = document.getElementById("1");
const medium = document.getElementById("500");
const hard = document.getElementById("1000");
light.addEventListener("click", changeLevel);
medium.addEventListener("click", changeLevel);
hard.addEventListener("click", changeLevel);
var level = 1;
function changeLevel(ev) {
	level = parseInt(ev.target.id);
	console.log(level)
	generate();
}

let answer;

function generate() {
	let onenum = (Math.floor(Math.random() * 500) + level);
	let twonum = (Math.floor(Math.random() * 500) + level);
	answer = onenum + twonum;
	one.innerHTML = onenum;
	two.innerHTML = twonum;
}

function check() {
	if (!ans.value) return;

	if (parseInt(ans.value) === answer) {
		result.innerHTML = "CORRECT 💯";
	} else {
		result.innerHTML = `WRONG ❌ The answer is ${answer}`;
	}

	ans.value = "";

	generate();
}
generate();

btn.addEventListener("click", check);
