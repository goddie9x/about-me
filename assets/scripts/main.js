const $AO = function activeOn(elements) {
    elements.forEach(element => {
        element.classList.add('active');
    })
}

const $AOff = function activeOff(elements) {
    elements.forEach(element => {
        element.classList.remove('active');
    })
}

const $toggle = function toggleActiveClass(elements) {
    elements.forEach(element => {
        element.classList.toggle('active');
    })
}
$('.main-nav-moblie').onclick = function() {
    console.log([...$$('.menu-icon'), $('.main-nav-bar')])
    $toggle([...$$('.menu-icon'), $('.main-nav-bar')]);
}