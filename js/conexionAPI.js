
async function conexion() {
    try {
        const response = await fetch("http://localhost:3001/videos");
        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al listar los videos:", error);
    }
}

export const conexionAPI = {
    conexion
};



