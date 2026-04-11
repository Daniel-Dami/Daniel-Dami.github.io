const imgs = ["image/beach.png", "image/castle.png", "image/boatoff.png"];
const links = ["#", "#", "game/boatoff"];
function changeSlide() {
    document.getElementById("slide").src = imgs[cnt];
    // document.getElementById("slit").src = links[cnt];
    cnt = (cnt + 1) % imgs.length;
}
document.addEventListener("DOMContentLoaded", function () {
    let cnt = 0;
    setInterval(changeSlide, 1000);
});