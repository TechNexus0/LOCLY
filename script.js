const filtros = document.querySelectorAll(".btn-filtro");
const tarjetas = document.querySelectorAll(".tarjeta");

filtros.forEach(filtro => {

    filtro.addEventListener("click", () => {

        filtros.forEach(btn => btn.classList.remove("activo"));

        filtro.classList.add("activo");

        const categoria = filtro.dataset.categoria;

        tarjetas.forEach(tarjeta => {

            if (categoria === "todos" || tarjeta.dataset.categoria === categoria) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }

        });

    });

});

const contenedor = document.querySelector(".tarjetas");

document.getElementById("izquierda").addEventListener("click", () => {

    contenedor.scrollLeft -= 350;

});

document.getElementById("derecha").addEventListener("click", () => {

    contenedor.scrollLeft += 350;

});

const botonesEncontrar = document.querySelectorAll(".encontrar");

botonesEncontrar.forEach(boton => {

    boton.addEventListener("click", () => {

        alert(`Tiendas cercanas

✔ Zara
✔ Kenzo
✔ Falabella`);

    });

});

document.getElementById("favoritos").addEventListener("click", () => {

    alert(`Mis favoritos

❤️ Chaqueta Oversize

❤️ Vestido Blanco

❤️ Blusa Negra`);

});
function cerrarSesion(){

    alert("Cerrando sesión...");

    window.location.href = "index.html";

}