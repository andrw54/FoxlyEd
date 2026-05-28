document.addEventListener("DOMContentLoaded", function(params) {
    let user = sessionStorage.getItem("user");
    if (user !== "admin") {
        window.location.href = "./nosotros.html";
    }
})
