function validarUsuario(){
    var c = 1; // array contrasenas
    var u = "beto"; // array usuarios

    if(document.form.password.value == c && document.form.usuario.value == u){
        window.location.href = "productos.html" // redirecciona al html para ver la base de productos actuales
        alert("Bienvenido");
    }
    else{
        alert("Los datos ingresados son invalidos");
        window.location.href = "Index.html"
    }
}
