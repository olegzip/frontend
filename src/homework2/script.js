document.getElementById('tumbler').addEventListener("click", function() {
    let darkTheme = document.documentElement.classList.toggle('dark-theme');
    document.getElementById('tumbler').classList.toggle('enabled');
    localStorage.setItem('darkTheme', darkTheme);
});

if (JSON.parse(localStorage.getItem('darkTheme'))) {
    document.documentElement.classList.add('dark-theme');
}
