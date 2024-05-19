function validarFormulario() {
    // Validar que los campos no estén vacíos y el mensaje tenga al menos 10 caracteres
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

    if (nombre == "" || email == "" || asunto == "" || mensaje == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (mensaje.length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres.");
        return false;
    }
    
    return true;
}