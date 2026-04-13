function abrirFormulario() {
    document.getElementById("formularioModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function cerrarFormulario() {
    document.getElementById("formularioModal").style.display = "none";
    document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
    const cedula = document.getElementById("cedula");

    if (cedula) {
        cedula.addEventListener("input", function (e) {
            let valor = e.target.value.replace(/\D/g, "");
            valor = valor.substring(0, 11);

            let formateado = "";

            if (valor.length > 0) formateado += valor.substring(0, 3);
            if (valor.length > 3) formateado += "-" + valor.substring(3, 10);
            if (valor.length > 10) formateado += "-" + valor.substring(10, 11);

            e.target.value = formateado;
        });
    }

    const modal = document.getElementById("formularioModal");
    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                cerrarFormulario();
            }
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            cerrarFormulario();
        }
    });

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 640) {
                document.activeElement.blur();
            }
        });
    });
});