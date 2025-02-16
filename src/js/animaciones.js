document.addEventListener("DOMContentLoaded", function () {
    const titulos = document.querySelectorAll("h2");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("activo");
            }
        });
    }, { threshold: 1.0 });

    titulos.forEach(titulo => observer.observe(titulo));
});

