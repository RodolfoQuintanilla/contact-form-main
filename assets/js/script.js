document.addEventListener('DOMContentLoaded', function () {
    const email = {
        inputName: '',
        inputLastName: '',
        inputEmail: '',
        inputRadio1: '',
        inputRadio2: '',
        mensaje: ''
    }

    const inputName = document.querySelector('#firstName');
    const inputLastName = document.querySelector('#lastName');
    const inputEmail = document.querySelector('#email');
    const inputRadio1 = document.querySelector('#radio1');
    const inputRadio2 = document.querySelector('#radio2');
    const mensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    inputName.addEventListener('blur', validar);
    inputLastName.addEventListener('blur', validar);
    inputEmail.addEventListener('blur', validar);
    inputRadio1.addEventListener('blur', validar);
    inputRadio2.addEventListener('blur', validar);
    mensaje.addEventListener('blur', validar)


    function validar(e) {
        e.preventDefault();

        console.log();

        if (e.target.value.trim() === '') {

            mostrarAlerta('This field is required', e.target.parentElement)
            return;
        }

        limpiarAlerta(e.target.parentElement);

        function mostrarAlerta(mensaje, referencia) {
            //comprueba si ya existe una alerta
            const alerta = referencia.querySelector('.errores');

            if (alerta) {
                alerta.remove();
            }


            //Generar alerta de HTML
            const error = document.createElement('P')
            error.textContent = mensaje;
            error.classList.add('errores');

            referencia.appendChild(error)
        }

        function limpiarAlerta(referencia) {
            const alerta = referencia.querySelector('.errores');

            if (alerta) {
                alerta.remove();
            }
        }
    }
})

