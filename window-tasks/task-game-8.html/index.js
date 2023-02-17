// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur.
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini
//  ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq

const pokemon = document.getElementById("pokemon");
let img = document.getElementById("img");
let newImg = "img/jumpp.png";
let oldImg = "img/pikachu.png";
document.addEventListener("keyup", (e) => {
    console.log(e);
    if (e.code === "Space") {
        pokemon.style.transform = "translate(-50%, -50%) translateY(-200px)";
        img.src = newImg;
        setTimeout(() => {
            pokemon.style.transform = "translate(-50%, -50%)";
            img.src = oldImg;
        }, 600);
    }
});


