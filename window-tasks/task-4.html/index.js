// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.

const divBox = document.querySelector("#newDiv");
const startBtn = document.querySelector("#startButton");
const stopBtn = document.querySelector("#stopButton");
const text = document.querySelector("#btnText");
let rotateDegree = 0;
startBtn.addEventListener("click", function startFunc() {
    setTimeout(function () {
        intervalName = setInterval(function () {
            rotateDegree += 90;
            divBox.style.transform = `rotate(${rotateDegree}deg)`;
            divBox.style.transition = "all 0.5s ease-in-out";
        }, 2000);
    }, 1000);
    console.log(startBtn);
});
let count = 4;
stopBtn.addEventListener("click", function stopFunc() {
    const countDown = setInterval(function () {
        count--;
        if (count <= 0) {
            clearInterval(countDown);
            console.log("STOP");
            clearInterval(intervalName);
        }

        text.innerHTML = count;
    }, 1000);
});
