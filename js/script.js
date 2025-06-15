// Espera a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    // Validación de formulario
    const form = document.querySelector("form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    if (form && nombre && email && mensaje) {
        [nombre, email, mensaje].forEach(input => {
            input.style.border = "2px solid #5625DB";
            input.style.borderRadius = "10px";
            input.style.padding = "10px";
            input.style.marginBottom = "10px";
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nombreValor = nombre.value.trim();
            const emailValor = email.value.trim();
            const mensajeValor = mensaje.value.trim();

            if (!nombreValor || !emailValor || !mensajeValor) {
                alert("Por favor, complete todos los campos.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValor)) {
                alert("Por favor, ingrese un correo electrónico válido.");
                return;
            }

            alert(`Gracias por su contacto, ${nombreValor}.\nEn breve le estaré respondiendo.`);
            form.reset();
        });
    }

    // Modo claro/oscuro con localStorage
    const modoClaroBtn = document.getElementById("modo-claro");
    const modoOscuroBtn = document.getElementById("modo-oscuro");

    function activarModoClaro() {
        document.body.classList.remove("modo-oscuro");
        document.body.classList.add("modo-claro");
        localStorage.setItem("modo", "claro");
    }

    function activarModoOscuro() {
        document.body.classList.remove("modo-claro");
        document.body.classList.add("modo-oscuro");
        localStorage.setItem("modo", "oscuro");
    }

    if (modoClaroBtn && modoOscuroBtn) {
        modoClaroBtn.addEventListener("click", activarModoClaro);
        modoOscuroBtn.addEventListener("click", activarModoOscuro);
    }

    // Aplicar modo guardado al cargar la página
    const modoGuardado = localStorage.getItem("modo");
    if (modoGuardado === "oscuro") {
        activarModoOscuro();
    } else {
        activarModoClaro();
    }

    // Menú hamburguesa accesible
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const expanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', expanded);
            menuToggle.setAttribute('aria-label', expanded ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
            menuToggle.setAttribute('title', expanded ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        });
    }
});
