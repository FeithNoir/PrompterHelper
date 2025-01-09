const finalPrompt = document.getElementById("finalPrompt");
const configInputs = document.querySelectorAll(".config-input");

// Paleta de colores para cada categoría
const categoryColors = {
    generalConfig: "#4CAF50",
    characterConfig: "#2196F3",
    emotionConfig: "#FF9800",
    clothingConfig: "#9C27B0",
    actionConfig: "#fc6d0e",
    settingConfig: "#ee1254",
};

document.querySelectorAll(".accordion-item label").forEach(label => {
    label.addEventListener("click", () => {
        const accordionItem = label.parentElement;
        const isActive = accordionItem.classList.contains("active");

        // Cerrar otros acordeones
        document.querySelectorAll(".accordion-item").forEach(item => {
            item.classList.remove("active");
        });

        // Abrir/cerrar el acordeón actual
        if (!isActive) {
            accordionItem.classList.add("active");
        }
    });
});

// Función para actualizar el prompt final con colores
function updateFinalPrompt() {
    const promptParts = Array.from(configInputs).map(input => {
        const value = input.value.trim();
        const color = categoryColors[input.id];
        return value ? `<span style="color: ${color}">${value}</span>` : "";
    });

    // Actualizamos el contenido del finalPrompt con colores
    finalPrompt.innerHTML = promptParts.filter(part => part !== "").join(", ");
}

// Añadir eventos de entrada a cada textarea de configuración
configInputs.forEach(input => {
    input.addEventListener("input", updateFinalPrompt);
});

// Inicializar el prompt final vacío
updateFinalPrompt();
