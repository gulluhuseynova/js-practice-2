// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate 
// edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin. 

function generateRandomColor() {
    let maxVal = 0xffffff;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}
console.log(generateRandomColor());

window.addEventListener("click", function (event) {
    console.log(event);
    if (event.type == "click") {
        let div = document.createElement("div");
        div.style.cssText = "width:100px;height:100px;";
        div.style.backgroundColor = generateRandomColor();
        document.body.appendChild(div);
    }
});
