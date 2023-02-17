// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq
// en sag kunce 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve
// sonda ilk bashldigi yere qayitsin

let square = document.getElementById("square");
let count = 0;

function clicked() {
    switch (count) {
        case 0:
            square.classList = "top-right";
            break;
        case 1:
            square.classList = "bottom-right";
            break;
        case 2:
            square.classList = "bottom-left";
            break;
        case 3:
            square.classList = "top-left";
            break;
        default:
            console.log("X");
            break;
    }
    count = (count + 1) % 4;
}

// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin.
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.

// let x = 0;
// let y = 0;

// document.addEventListener("keydown", (e) => {
//     switch (e.key) {
//         case "ArrowLeft":
//             x -= 10;
//             break;
//         case "ArrowUp":
//             y -= 10;
//             break;
//         case "ArrowRight":
//             x += 10;
//             break;
//         case "ArrowDown":
//             y += 10;
//             break;
//         default:
//             return;
//     }
//     square.style.transform = `translate(${x}px, ${y}px)`;
// });

// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin. 
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin. 

// ----------------------------