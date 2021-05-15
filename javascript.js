function toggleTheme() {
    if(document.getElementById("body").classList.contains("theme-dark")) {
        document.getElementById("body").classList.replace("theme-dark","theme-light");
    } else {
        document.getElementById("body").classList.replace("theme-light","theme-dark");
    }
}