console.log('Hola');
const user = 
[
    {
     "email": "admin@admin.com",
     "password": "admin123",
     "usuario": "Admin"
    },
    {
     "email": "estudiante@estu.com",
     "password": "estudiante123",
     "usuario": "Estudiante"
    },
    {
     "email": "maestro@maestro.com",
     "password": "maestro123",
     "usuario": "Maestro"
    },

]

function inicioSesion(email, password)
{
    for (let index = 0; index < user.length; index++)
    {
        const element = user[index];
        console.log("index", index);
        console.log("element", element.)
        
    }
  
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("exampleInputEmail1").value;
    let password =document.getElementById("exampleInputPassword1").value;
    inicioSesion (email, password);
    if (user.email === email && user.password === password)
    {
        sessionStorage.setItem("usuario", user.usuario);
        window.location.href ="./Post_Login/menu.html"
        return  
    }
    formulario.reset();
    return   alert("Usuario no encontrado")
});
