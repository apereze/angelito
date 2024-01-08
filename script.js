function redirect(url) {
    window.location.href = url;
}

function moveButton() {
    const button = document.getElementById("noButton");

    // Cambia la posición de forma aleatoria
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Deshabilita el botón para evitar clics adicionales
    button.disabled = true;
}
