//получаем доступ к элементам
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

//добавляем обработчик событий по клику кнопки
document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout (() => {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game over!")
    }
}, 10)
//parseInt - разбирает элемент и выводит целое число
//getComputedStyle - возвращает объект, содержащий значения всех CSS свойств элемента
//getPropertyValue - получаем это значение в строковом значении (именно поэтому используем parseInt)