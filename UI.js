function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)