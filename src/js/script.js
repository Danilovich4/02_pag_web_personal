document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mostrar / Ocultar menú hamburguesa
    toggleButton.addEventListener('click', function () {
        navLinks.classList.toggle('activo');
    });

    // Cerrar menú al hacer clic en un enlace
    const enlacesMenu = navLinks.querySelectorAll('a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function () {
            navLinks.classList.remove('activo');
        });
    });
});