const form = document.getElementById('formContacto');
const mensajeEstado = document.getElementById('mensaje-estado');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();


    if (nombre === "" || email === "" || mensaje === "") {
        mensajeEstado.textContent = "Error: Todos los campos son obligatorios";
        mensajeEstado.className = "error"; // Aplica color rojo y display: block
        return;
    }

  
    if (!email.includes("@")) {
        mensajeEstado.textContent = "Error: Introduce un email válido.";
        mensajeEstado.className = "error";
        return;
    }


    mensajeEstado.textContent = "¡Mensaje enviado con éxito al centro de comandos!";
    mensajeEstado.className = "exito"; 


    form.reset();
});