// 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px kvadrat olsun
// 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.
let box = document.querySelector("#thirdBox");
setInterval(() => {
    if (box.style.width === "200px") {
        box.style.width = "400px";
        box.style.height = "400px";
    } else {
        box.style.width = "200px";
        box.style.height = "200px";
    }
}, 1000);