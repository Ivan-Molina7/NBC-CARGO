
const serviceID = 'default_service';
const templateID = 'template_gr91w35';

document.addEventListener('DOMContentLoaded', function() {
    function validateName() {
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
        if (name.length < 2) {
            nameError.textContent = 'El nombre debe tener al menos 2 caracteres.';
            document.getElementById('name').classList.add('invalid');
            return false;
        } else {
            nameError.textContent = '';
            document.getElementById('name').classList.remove('invalid');
            return true;
        }
    }

    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = document.getElementById('emailError');
        if (!emailPattern.test(email)) {
            emailError.textContent = 'El correo electrónico no es válido.';
            document.getElementById('email').classList.add('invalid');
            return false;
        } else {
            emailError.textContent = '';
            document.getElementById('email').classList.remove('invalid');
            return true;
        }
    }

    function validateTelefono() {
        const telefono = document.getElementById('telefono').value.trim();
        const telefonoPattern = /^[0-9]+$/;
        const telefonoError = document.getElementById('telefonoError');
        if (!telefonoPattern.test(telefono)) {
            telefonoError.textContent = 'El teléfono debe contener solo números.';
            document.getElementById('telefono').classList.add('invalid');
            return false;
        } else {
            telefonoError.textContent = '';
            document.getElementById('telefono').classList.remove('invalid');
            return true;
        }
    }

    function validateInteres() {
        const interes = document.getElementById('interes').value;
        const interesError = document.getElementById('interesError');
        if (interes === '') {
            interesError.textContent = 'Debes seleccionar un interés.';
            document.getElementById('interes').classList.add('invalid');
            return false;
        } else {
            interesError.textContent = '';
            document.getElementById('interes').classList.remove('invalid');
            return true;
        }
    }

    function validateComentarios() {
        const comentarios = document.getElementById('comentarios').value.trim();
        const comentariosError = document.getElementById('comentariosError');
        if (comentarios === '') {
            comentariosError.textContent = 'Los comentarios son obligatorios.';
            document.getElementById('comentarios').classList.add('invalid');
            return false;
        } else {
            comentariosError.textContent = '';
            document.getElementById('comentarios').classList.remove('invalid');
            return true;
        }
    }

    // Asignar eventos a los campos para la validación en tiempo real
    document.getElementById('name').addEventListener('blur', validateName);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('telefono').addEventListener('blur', validateTelefono);
    document.getElementById('interes').addEventListener('blur', validateInteres);
    document.getElementById('comentarios').addEventListener('blur', validateComentarios);

    // Enviar el formulario si las validaciones pasan
    document.getElementById('contactoForm').addEventListener('submit', function(event) {
        // Evita el envío por defecto del formulario
        event.preventDefault();

        // Validar los campos
        const isValidName = validateName();
        const isValidEmail = validateEmail();
        const isValidTelefono = validateTelefono();
        const isValidInteres = validateInteres();
        const isValidComentarios = validateComentarios();

        // Si todas las validaciones son correctas, proceder a enviar el formulario
        if (isValidName && isValidEmail && isValidTelefono && isValidInteres && isValidComentarios) {
            emailjs.sendForm(serviceID, templateID, this)
          
                .then(function(response) {
                    let mensajeExistoso = document.getElementById('enviarMensaje')
                    mensajeExistoso.style.color = 'green';
                    mensajeExistoso.textContent = 'Mensaje enviado con exito. Gracias por contactarnos.';

                    setTimeout(function() {
                        mensajeExistoso.textContent = '';
                    }, 5000);

                    document.getElementById('contactoForm').reset();
                }, function(error) {
                    let mensajeError = document.getElementById('enviarMensaje')
                    mensajeError.style.color = 'rgb(211, 12, 12)';
                    mensajeError.textContent = 'Algo salió mal. Por favor, inténtelo de nuevo.';

                    setTimeout(function() {
                        mensajeError.textContent = '';
                    }, 5000);
                });
        }
    });
});
