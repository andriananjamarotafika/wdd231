const navButton = document.getElementById("nav-button");
const navBar = document.getElementById("nav-bar");
navButton.addEventListener('click',()=>{
    const isOpen = navButton.classList.toggle('show');
    navButton.setAttribute('aria-expanded',isOpen);
    navBar.classList.toggle('show');
});