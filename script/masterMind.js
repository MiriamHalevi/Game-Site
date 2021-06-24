//globall variables
var tryArray = document.querySelectorAll('section .container');
var win = false;
var counter = 0;
var colorOptions = ["red", "blue", "yellow", "palevioletred", "green", "black", "purple", "turquoise"];
var choosenColors = [];
//choose the colors the user need to guess
const swap = (i, j) => {
    let help = colorOptions[i];
    colorOptions[i] = colorOptions[j];
    colorOptions[j] = help;
}
function chooseColors() {
    let length = colorOptions.length;
    for (let index = 0; index < 4; index++) {
        let i = Math.floor(Math.random() * length);
        choosenColors[index] = colorOptions[i];
        swap(i, length - 1);
        length--;
    }
    console.log("choos   " + choosenColors)
}
//add and remove dragging options
function addEvents() {
    let CurrentTry = tryArray[counter].children[0].children;
    for (let index = 0; index < CurrentTry.length; index++) {
        CurrentTry[index].addEventListener('drop', drop);
        CurrentTry[index].addEventListener('dragover', allowDrop);

    }
}
function removeEvents() {
    let CurrentTry = tryArray[counter].children[0].children;

    for (let index = 0; index < CurrentTry.length; index++) {
        CurrentTry[index].removeEventListener('drop', drop);
        CurrentTry[index].removeEventListener('dragover', allowDrop);

        CurrentTry[index].style.backgroundColor = CurrentTry[index].firstChild.id
        CurrentTry[index].firstChild.id = "aaa"
        
    }
}
//handel the game
function check() {

    let didWin = true;
    let pointsIndex = 0;
    let newArray = tryArray[counter].children[0].children;
    let points = tryArray[counter].children[1].children;

    let userGuess = [];
    for (let index = 0; index < newArray.length; index++)
        userGuess.push(newArray[index].firstChild.id);
    console.log(userGuess)
    for (let index = 0; index < choosenColors.length; index++) {
        if (userGuess.indexOf(choosenColors[index]) == index) {
            console.log(points[pointsIndex].style.backgroundColor)
            points[pointsIndex++].style.backgroundColor = "red";
        }

        else {
            if (userGuess.indexOf(choosenColors[index]) > -1)
                points[pointsIndex++].style.backgroundColor = "black";
            didWin = false;
        }
    }
    if (didWin) {
        alert("you win the game");
        removeEvents()
        document.getElementsByTagName('button')[0].removeEventListener('click', check)
        location.reload();
    }
    removeEvents();
    counter++;
    addEvents();
    generateColors();
    if (counter > 10) {
        alert("מצטערים המשחק נגמר נסה שוב");
        location.reload();
    }


}
function generateColors() {
    let colorBar = "";
    for (let index = 0; index < colorOptions.length; index++) {
        colorBar += ` <div ondrop="drop(event)" ondragover="allowDrop(event)">
         <div draggable="true" ondragstart="drag(event)" id="${colorOptions[index]}"></div>
     </div>`;
    }

    document.getElementsByClassName("colorBar")[0].innerHTML = colorBar;

}
window.addEventListener('load', addEvents)
window.addEventListener('load', generateColors)
window.addEventListener('load', chooseColors)
///handle dragging   
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("draggedColor", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("draggedColor");
    ev.target.appendChild(document.getElementById(data));
}