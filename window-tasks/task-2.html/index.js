// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.
window.onload = function () {
    let x = 0;
    let y = 0;
    setInterval(moveElement, 1000);
    function moveElement() {
        x += 10;
        y += 10;
        let left = x + "px";
        let top = y + "px";
        document.getElementById("secondBox").style.left = left;
        document.getElementById("secondBox").style.top = top;
    }
};
