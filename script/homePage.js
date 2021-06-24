
document.getElementById("linkConnect").addEventListener("click", wichValue);
window.addEventListener('load', losto)


function addUser(u) {
        localStorage.setItem("userName", u);
        losto();

}
function losto() {
        if (localStorage.userName) {
                document.getElementById("linkName").innerHTML = "  שלום  " + localStorage.userName;
                document.getElementById("linkConnect").innerHTML = "צא,התנתק";
        }
        else {
                document.getElementById("linkName").innerHTML = "שלום אורח";
                document.getElementById("linkConnect").innerHTML = "התחבר/הרשם";
        }
}


function deleteLocalStorage() {
        localStorage.clear();
        losto();
}
function ifdeleteLS() {
        let u = confirm(localStorage.userName + " האם הינך מעוניין להתנתק?  ");
        if (u == true)
                deleteLocalStorage();
}
function wichValue() {
        if (!localStorage.userName) {
                let u = prompt("הכנס שם משתמש");
                addUser(u);
        }
        else
                ifdeleteLS();
}
