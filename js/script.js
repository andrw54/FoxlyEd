const user = [
{
    "email":"admin@admin.com",      
    "password":"admin123",
    "user":"admin"
},
{
    "email": "estuden@estuden.com",
    "password": "estuden123",
    "user": "estudiante"  
},
{
    "email": "maes@maes.com",
    "password": "maes123",
    "user": "maestro"
}
]
function iniciosesion(email, password) {
    for (let index = 0; index < user.length; index++) {
        const element = user[index];
        if (element.email === email && element.password === password) {
            alert("Usuario encontrado");
            sessionStorage.setItem("user", element.user);
            break;
        }
        alert("Credenciales incorrectas");
    }
    console.log("index", index);
    console.log("elemento", element.email);
    console.log("elemento", element.password);
    console.log("elemento", element.user);
}



//funciones flecha
//cuales son los metodos de los arreglos en javascript

