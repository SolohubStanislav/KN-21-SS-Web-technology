document.addEventListener("DOMContentLoaded", function () {

    // 1. Зміна тексту
    document.getElementById("changeTextBtn").addEventListener("click", function () {
        document.getElementById("text").textContent = "Текст успішно змінено!";
    });

    // 2. Зміна стилю при наведенні
    const hoverButton = document.getElementById("hoverButton");
    hoverButton.addEventListener("mouseover", function () {
        document.body.style.backgroundColor = "#FFA500";
    });
    hoverButton.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = "#f4f4f4";
    });

    // 3. Додавання нового елемента
    document.getElementById("addElementBtn").addEventListener("click", function () {
        const newElement = document.createElement("div");
        newElement.className = "newElement";
        newElement.textContent = "Це новий доданий елемент.";
        document.getElementById("elementContainer").appendChild(newElement);
    });

    // 4. Додаткове завдання
    let clickCount = 0;
    const maxClicks = 13;
    const myName = "Станіслав Сологуб";

    document.getElementById("clickCounterBtn").addEventListener("click", function () {
        clickCount++;
        if (clickCount === maxClicks) {
            alert(`${myName} варіант номер ${maxClicks}!`);
            clickCount = 0;
        }
    });

});