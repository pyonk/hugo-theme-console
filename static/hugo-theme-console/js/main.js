const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const darkModeOn = getThemeFromLocalStorage() ?? darkModeMediaQuery.matches;

window.onload = () => {
    setTheme(darkModeOn);

    darkModeMediaQuery.addEventListener("change", (e) => {
        darkModeOn = e.matches;
        setTheme(darkModeOn);
    });

    const themeToggle = document.querySelector(".theme-toggle");
    themeToggle.onclick = () => modeToggle();
}

function saveThemeToLocalStorage(darkThemeOn) {
    window.localStorage.setItem('dark-theme', darkThemeOn);
}

function getThemeFromLocalStorage() {
    return window.localStorage.getItem('dark-theme') === 'true';
}

function setTheme(darkMode) {
    if (darkMode) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        saveThemeToLocalStorage(true);
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        saveThemeToLocalStorage(false);
    }
}

function modeToggle() {
    const darkThemeOn = document.body.classList.contains('dark-theme');
    setTheme(!darkThemeOn);
}

