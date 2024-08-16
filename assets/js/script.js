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

    inputName.addEventListener('blur', validar);
    inputLastName.addEventListener('blur', validar);
    inputEmail.addEventListener('blur', validar);
    inputRadio1.addEventListener('blur', validar);
    inputRadio2.addEventListener('blur', validar);
    mensaje.addEventListener('blur', validar)


    function validar(e) {
        e.preventDefault();

        if (e.target.value.trim() === '') {
            console.log('Vacio');
        } else {
            console.log('tiene');

        }

        function mostrarAlerta() {
            const alerta = 
        }





    }
})

