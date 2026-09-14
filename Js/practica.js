console.log ("hola");
const user ={
    "email":"admin@admin.com",
    "password": "admin123",
     "user ": "admin"
}

const formulario = document.getElementById("iniciosesion");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

   let email= document.getElementById("email").value;
   let password = document.getElementById("password").value;
   
   console.log("entre",email,password)
    if(user.email === email && user.password === password){
        sessionStorage.setItem("user", user.user);
     window.location.href="./paginas/indiex.html";
     return
    }
//    formulario.reset();
    return alert("usuario no  encontrado")


})