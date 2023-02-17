// 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz
//  qeder olculer boyusun ve ya kicilsin.Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun
// FALSE---------------------------------------------
let div = document.getElementById("myDiv");
let inputt = document.getElementById("myInput");
// let divWidth = div.style.width = '10px'
// let divHeight = div.style.height = '10px'
inputt.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        console.log(e.code);
        let inputVal = inputt.value;
        let divWidth = 0;
        let divHeight = 0;
        div.style.width = divWidth + inputVal + "px";
        div.style.height = divHeight + inputVal + "px";
    }
});

