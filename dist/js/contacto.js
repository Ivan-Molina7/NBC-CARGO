document.addEventListener('DOMContentLoaded', function() {
    function validateName() {
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
        if (name.length < 2) {
            nameError.textContent = 'El nombre debe tener al menos 2 caracteres.';
            document.getElementById('name').classList.add('invalid');
            document.querySelector('.btn-submit').disabled = true;
        } else {
            nameError.textContent = '';
            document.getElementById('name').classList.remove('invalid');
            document.querySelector('.btn-submit').disabled = false;
        }
    }

    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = document.getElementById('emailError');
        if (!emailPattern.test(email)) {
            emailError.textContent = 'El correo electrónico no es válido.';
            document.getElementById('email').classList.add('invalid');
            document.querySelector('.btn-submit').disabled = true;
        } else {
            emailError.textContent = '';
            document.getElementById('email').classList.remove('invalid');
            document.querySelector('.btn-submit').disabled = false;
        }
    }

    function validateTelefono() {
        const telefono = document.getElementById('telefono').value.trim();
        const telefonoPattern = /^[0-9]+$/;
        const telefonoError = document.getElementById('telefonoError');
        if (!telefonoPattern.test(telefono)) {
            telefonoError.textContent = 'El teléfono debe contener solo números.';
            document.getElementById('telefono').classList.add('invalid');
            document.querySelector('.btn-submit').disabled = true;
        } else {
            telefonoError.textContent = '';
            document.getElementById('telefono').classList.remove('invalid');
            document.querySelector('.btn-submit').disabled = false;
        }
    }

    function validateInteres() {
        const interes = document.getElementById('interes').value;
        const interesError = document.getElementById('interesError');
        if (interes === '') {
            interesError.textContent = 'Debes seleccionar un interés.';
            document.getElementById('interes').classList.add('invalid');
            document.querySelector('.btn-submit').disabled = true;
        } else {
            interesError.textContent = '';
            document.getElementById('interes').classList.remove('invalid');
            document.querySelector('.btn-submit').disabled = false;
        }
    }

    function validateComentarios() {
        const comentarios = document.getElementById('comentarios').value.trim();
        const comentariosError = document.getElementById('comentariosError');
        if (comentarios === '') {
            comentariosError.textContent = 'Los comentarios son obligatorios.';
            document.getElementById('comentarios').classList.add('invalid');
            document.querySelector('.btn-submit').disabled = true;
        } else {
            comentariosError.textContent = '';
            document.getElementById('comentarios').classList.remove('invalid');
            document.querySelector('.btn-submit').disabled = false;
        }
    }

    document.getElementById('name').addEventListener('blur', validateName);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('telefono').addEventListener('blur', validateTelefono);
    document.getElementById('interes').addEventListener('blur', validateInteres);
    document.getElementById('comentarios').addEventListener('blur', validateComentarios);

    document.getElementById('contactoForm').addEventListener('submit', function(event) {
        validateName();
        validateEmail();
        validateTelefono();
        validateInteres();
        validateComentarios();

        // Comprobar si hay errores visibles
        const errors = document.querySelectorAll('.error');
        const hasErrors = Array.from(errors).some(error => error.textContent !== '');

        if (hasErrors) {
            event.preventDefault();
      
        }
    });
});