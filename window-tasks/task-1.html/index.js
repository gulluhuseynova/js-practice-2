// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.
window.onload = function () {
    let x = 0;
    let setInt = setInterval(moveElement, 2000);

    function moveElement() {
        x += 20;
        let left = x + "px";
        document.getElementById("firstBox").style.left = left;
    }
    setTimeout(function () {
        clearInterval(setInt);
    }, 20000);
};