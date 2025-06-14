// Espera a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    // Agregar estilo uniforme desde JS por si no se usa CSS
    [nombre, email, mensaje].forEach(input => {
        input.style.border = "2px solid #5625DB";
        input.style.borderRadius = "10px";
        input.style.padding = "10px";
        input.style.marginBottom = "10px";
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío real

        const nombreValor = nombre.value.trim();
        const emailValor = email.value.trim();
        const mensajeValor = mensaje.value.trim();

        // Validación simple
        if (!nombreValor || !emailValor || !mensajeValor) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValor)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        // Si todo está bien
        alert(`Gracias por su contacto, ${nombreValor}.\nEn breve le estaré respondiendo.`);

        // Limpiar el formulario
        form.reset();
    });
});
