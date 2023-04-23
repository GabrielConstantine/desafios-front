class  TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        
        //Base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //Estilo do component
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: black;
            }
        `;

        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

CustomElement.define("titulo-dinamico", TituloDinamico)