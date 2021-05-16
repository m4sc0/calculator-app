function toggleTheme() {
if(document.getElementById("body").classList.contains("theme-dark")) {
    document.getElementById("body").classList.replace("theme-dark","theme-light");
} else {
    document.getElementById("body").classList.replace("theme-light","theme-dark");
}
}

// var n1 = 1;
// var n2 = 2;
// var n3 = 3;
// var n4 = 4;
// var n5 = 5;
// var n6 = 6;
var n7 = 7;
// var n8 = 8;
// var n9 = 9;
// var n0 = 0;

function putNumbers(number) {
    const display = document.getElementById('output');
    display.textContent =+ number;
};