console.log()
function login() {
   var email = document.getElementById("email"). value;
   var password;
document.getElementById("password").value;

   if (email === "" || password ==="") {
    document.getElementById("error-message").textContent =
"Por favor, ingrese un correo electronico y una contraseña validos.";
} else if (email === "usuario@example.com" && password ==="contraseña") {
//Autenticación Exitosa
document.getElementById("error-message").textContent ="";
alert("¡inicio de sesion exitoso!");
//aqui puedes redirigir al usuario o realizar 
//otras acciones despues de iniciar sesión
} else {
// autenticación fallida
document.getElementById("error-message").textContent =
"ERROR: La contraseña que ghas escrito para el usuario es incorrect. Intente de nuevo.";
}
}
