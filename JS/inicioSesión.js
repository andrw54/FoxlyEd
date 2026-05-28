//Nunca Trabajar con Var. Trabajar con let
const user = [
    {
        "email": "admin@admin.com",
        "password": "admin123",
        "usuario": "Admin"
    },
    {
        "email": "estu@estu.com",
        "password": "estudent123",
        "usuario": "Estudiante"
    },
    {
        "email": "prof@prof.com",
        "password": "profe123",
        "usuario": "Profesor"
    }
]
function inicioSeción(email, password) {
    let usuarioEncontrado
    for (let index = 0; index < user.length; index++) {
        const element = user[index];
        if (element.email === email && element.password === password) {
            usuarioEncontrado = element;
            break;
        }
        alert("no encontrado");
    }
    usuarioEncontrado = user.find(elemento => elemento.email === email && elemento.password === password)
    for (const element of user) {
        if (element.email === email & element.password === password) {
            usuarioEncontrado = element;
            break;
        }
    }
    console.log(usuarioEncontrado);
    if (usuarioEncontrado) {
        sessionStorage.setItem("usuario", usuarioEncontrado.user);
        alert("Encontrado")
    } else {
        alert("No encontrado")
    }
}
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let pasword = document.getElementById("pasword").value;

    if (user.email === email[0] && user.pasword === pasword[1]) {
        console.log("usuario si existe");

    } else {
        alert("no eres usuario");
    }
})
//necesito guardar en el local storage que tipo de ususario inicio secion para poder darle accesos a diferentes paginas de mi app, ¿Cómo logeo dichas páginas si el usuario no tiene permisos? Pasame la explicación y el codigo en JavaScript.