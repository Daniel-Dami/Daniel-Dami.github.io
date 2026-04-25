const imgs = ["image/beach.png", "image/castle.png", "image/boatoff.png"];
const links = ["#", "#", "game/boatoff"];
let cnt = 0;
function changeSlide() {
    document.getElementById("slide").src = imgs[cnt];
    // document.getElementById("slit").src = links[cnt];
    cnt = (cnt + 1) % imgs.length;
}
document.addEventListener("DOMContentLoaded", function () {
    setInterval(changeSlide, 1000);
});