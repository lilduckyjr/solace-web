var promovid = document.getElementById("promovid");

/*function playvid(winpos) {
    if (winpos >= 3300 && winpos <= 3400) {
        promovid.play()
    }
}

window.addEventListener('scroll', function() {
    winpos = window.scrollY;
    playvid(winpos)
});*/

var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
})