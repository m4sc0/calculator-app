function toggleTheme() {
if(document.getElementById("body").classList.contains("theme-dark")) {
    document.getElementById("body").classList.replace("theme-dark","theme-light");
} else {
    document.getElementById("body").classList.replace("theme-light","theme-dark");
}
}

var displayNum = '';

function set() {
    if (displayNum.charAt(0) === '0') {
        displayNum.slice(-1, 0);
    }
    document.getElementById('output').innerHTML = displayNum;
}

function putNumbers(number) {
    displayNum = displayNum + number;
    set()
}

function putSign(sign) {
    displayNum = displayNum + sign;
    set()
}
function removeNum() {
    displayNum = displayNum.slice(0, -1);
}

function reset() {
    displayNum = '0';
    set();
}