$(document).ready(function () {
    if (localStorage.getItem('theme') == '') {
        setTheme('info');
    }
});

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function info() {
    if (localStorage.getItem('theme') != 'info') {
        setTheme('info');
    }

}
function primary() {
    if (localStorage.getItem('theme') != 'primary') {
        setTheme('primary');
    }
}

function purpule() {
    if (localStorage.getItem('theme') != 'purpule') {
        setTheme('purpule');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'info') {
        setTheme('info');
    }  if (localStorage.getItem('theme') === 'primary'){
        setTheme('primary');
    }  if (localStorage.getItem('theme') === 'purpule'){
        setTheme('purpule');
    }
})();


