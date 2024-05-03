function confirmAge(isAdult) {
    if (isAdult) {
        window.location.href = "menu.html"; // Redirige al menú principal si es mayor de edad
    } else {
        window.location.href = "underage.html"; // Redirige a una página diferente si es menor de edad
    }
}
