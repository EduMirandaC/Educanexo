var header = document.getElementById('Header');

window.addEventListener('scroll', () => {
    var scroll = window.screenY
    if (scroll>3){
        header.style.backgroundColor = '#f2f2f2'
    }else {
        header.style.backgroundColor = 'transparent'
    }
})