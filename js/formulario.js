console.log("hola");
const user = {
    "email":"admin@admin.com",
    "password":"admin123",
    "user":"admin",

}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let email = document.getElementById("exampleInputEmail1").value;
    
    let password = document.getElementById("exampleInputPassword1").value;
    console.log(email, password);
    if (user.email === email && user.password === password) {
        sessionStorage.setItem("user", user.user);
        window.location.href = "../paginas/Post_Login/menú.html";
        return
    }
    formulario.reset();
    return alert("usuario no encontrado");
    
    

})
