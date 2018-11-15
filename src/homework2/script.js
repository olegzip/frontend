document.getElementById('tumbler').addEventListener("click", function() {
    let darkTheme = document.documentElement.classList.toggle('dark-theme');
    document.getElementById('tumbler').classList.toggle('dark-theme-enabled');
    // console.log(darkTheme);
    localStorage.setItem('darkTheme', darkTheme);
});

if (JSON.parse(localStorage.getItem('darkTheme'))) {
    document.documentElement.classList.add('dark-theme');
    document.getElementById('tumbler').classList.add('dark-theme-enabled');
}
