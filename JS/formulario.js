console.log('Hola');
const user = {
    "email": "admin@admin.com",
    "password": "admin123",
    "usuario": "admin"
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("exampleInputEmail1").value;
    let password =document.getElementById("exampleInputPassword1").value;
    if (user.email === email && user.password === password)
    {
        sessionStorage.setItem("usuario", user.usuario);
        window.location.href ="./Post_Login/menu.html"
        return  
    }
    formulario.reset();
    return   alert("Usuario no encontrado")
});
