let buttonClicked = false;

function redirect(url) {
    window.location.href = url;
}

function moveButton() {
    if (!buttonClicked) {
        // Cambia la posición de forma aleatoria
        const button = document.getElementById("noButton");
        const maxX = window.innerWidth - button.clientWidth;
        const maxY = window.innerHeight - button.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;

        buttonClicked = true;
    }
}
