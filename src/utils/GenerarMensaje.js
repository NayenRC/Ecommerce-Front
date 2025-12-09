let container = null;

export const generarMensaje = (mensaje, tipo = "info", duracion = 3000) => {

    if (!container) {
        container = document.createElement("div");
        container.style.position = "fixed";
        container.style.top = "180px";
        container.style.left = "50%";
        container.style.transform = "translateX(-50%)";
        container.style.zIndex = "9999";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        container.style.gap = "14px";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.style.padding = "16px 25px";
    toast.style.minWidth = "260px";
    toast.style.textAlign = "center";
    toast.style.borderRadius = "12px";
    toast.style.fontSize = "15px";
    toast.style.fontWeight = "600";
    toast.style.color = "white";
    toast.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-20px)";
    toast.style.transition = "all 0.35s ease";

    const colores = {
        success: "#56ca80ff",
        error: "#e83434ff",
        warning: "#d97706",
        info: "#2563eb",
    };

    toast.style.background = colores[tipo] || colores.info;
    toast.textContent = mensaje;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 10);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-20px)";
        toast.addEventListener("transitionend", () => toast.remove());
    }, duracion);
};



