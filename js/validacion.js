function validarUsuario(){
    var c = 1; // array contrasenas
    var u = "beto"; // array usuarios

    if(document.form.password.value == c && document.form.usuario.value == u){
        window.location.href = "crearUsuario.html" // esto deberia redireccionar al Inicio no al form de aca
        alert("Bienvenido");
    }
    else{
        alert("Los datos ingresados son invalidos");
    }
}
