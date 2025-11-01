const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

menuIcon.addEventListener('click', () => {
    if (menuIcon.innerHTML === '☰') {
        menuIcon.innerHTML = '✖';
    } else {
        menuIcon.innerHTML = '☰';
    }
    navList.classList.toggle('show');
});
