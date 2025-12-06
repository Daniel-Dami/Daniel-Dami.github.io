const imgs = ["image/beach.jpg", "image/castle.jfif", "image/boatoff.png"];
const links = ["#", "#", "game/boatoff"];
document.addEventListener("DOMContentLoaded", function () {
    let cnt = 0;
    setInterval(function () {
        document.getElementById("slide").src = imgs[cnt];
        document.getElementById("slided").src = links[cnt];
        cnt = (cnt + 1) % imgs.length;
    }, 3000);
});