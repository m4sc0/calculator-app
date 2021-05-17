function toggleTheme() {
if(document.getElementById("body").classList.contains("theme-dark")) {
    document.getElementById("body").classList.replace("theme-dark","theme-light");
} else {
    document.getElementById("body").classList.replace("theme-light","theme-dark");
}
}

var displayNum = '';
var submitState = false;

function set() {
    document.getElementById('output').innerHTML = displayNum;
}

function putNumbers(number) {
    if (submitState === false) {
        displayNum = displayNum + number;
        set()
    } else {
        reset();
    }
}

function putSign(sign) {
    displayNum = displayNum + sign;
    set()
}
function removeNum() {
    displayNum = displayNum.substring(0, displayNum.length - 1);
}

function reset() {
    submitState = false;
    displayNum = '';
    document.getElementById('output').innerHTML = '0';
}

function submit() {
    submitState = true;
    displayNum = eval(displayNum);
    set();
}