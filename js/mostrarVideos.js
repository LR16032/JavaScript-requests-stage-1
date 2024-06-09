// mostrarVideos.js
import { conexionAPI } from "./conexionAPI";

const lista = document.querySelector("[data-list]");

function crearCard(titulo) {
    const video = document.createElement("li");
    video.className = "videos__item";

    video.innerHTML = `
        <iframe width="100%" height="72%" src="https://www.youtube.com/embed/QjOWz9avkg8"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descripcion-video">
            <img src="./img/logo.png" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>236 mil visualizaciones</p>
        </div>`;

    return video;
}

async function listarVideo() {
    const listVideos = await conexionAPI.conexion();
    listVideos.forEach(video => lista.appendChild(crearCard(video.titulo)));
}

listarVideo();

console.log(listarVideo());


