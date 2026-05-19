//Nunca Trabajar con Var. Trabajar con let
const user = ["user@gmail.com", "123admin"]
let formul = document.getElementById("formulario");
formul.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("no se recargo", formulario);
    let email = document.getElementById("email").value;
    console.log("email", email);
    let pasword = document.getElementById("pasword").value;
    console.log("email", email);

    if (email === user[0] && pasword === user[1]) {
        console.log("usuario si existe");

    } else {
        alert("no eres usuario");
    }
})
//necesito guardar en el local storage que tipo de ususario inicio secion para poder darle accesos a diferentes paginas de mi app, ¿Cómo logeo dichas páginas si el usuario no tiene permisos? Pasame la explicación y el codigo en JavaScript.