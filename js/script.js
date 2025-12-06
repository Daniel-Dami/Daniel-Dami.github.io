const imgs = ["image/beach.png", "image/castle.png", "image/boatoff.png"];
const links = ["#", "#", "game/boatoff"];
document.addEventListener("DOMContentLoaded", function () {
    let cnt = 0;
    setInterval(function () {
        document.getElementById("slide").src = imgs[cnt];
        document.getElementById("slider").src = links[cnt];
        cnt = (cnt + 1) % imgs.length;
    }, 1000);
});