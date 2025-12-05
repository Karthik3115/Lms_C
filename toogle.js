const lightBut = document.getElementById('lightBut');
const darkBut = document.getElementById('darkBut');

lightBut.addEventListener('click', () => {
    document.body.classList.remove('dark');
});

darkBut.addEventListener('click', () => {
    document.body.classList.add('dark');
});


// With or without function it works

lightBut.addEventListener('click', () => setTheme('light'))
darkBut.addEventListener('click', () => setTheme('dark'))

const setTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}