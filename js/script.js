let toolsBtn = document.querySelectorAll('.toolBtn');

toolsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActiveClasses()
        btn.classList.add('active')
    })
});

function removeActiveClasses() {
    toolsBtn.forEach(btn => {
        btn.classList.remove('active')
    })
}