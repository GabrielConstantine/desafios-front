class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "By Anonymous");
        cardLeft.appendChild(autor);

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        cardLeft.appendChild(linkTitle);

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        
        const newsImage = document.createElement("img");
        newsImage.src = (this.getAttribute("image-url") || "/noticiarioWeb/Logo-portal.png");
        newsImage.alt = this.getAttribute("alt") || "Logo do Portal";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 100%;
                border: 2px solid black;
                box-shadow: 3px 6px 28px 9px rgba(0,0,0,0.75);
                -webkit-box-shadow: 3px 6px 28px 9px rgba(0,0,0,0.75);
                -moz-box-shadow: 3px 6px 28px 9px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                background-color: cadetblue;
                justify-content: space-between;    
            }

            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card_left > span {
                font-weight: 500;
                color: gainsboro;
                font-style: italic;
            }

            .card_left > a {
                margin-top: 15px;
                font-size: 30px;
                color: black;
                text-decoration: none;
                font-weight: bold;
              }

            .card_left > p {
                color: gainsboro;
                font-size: 18px;
            }

            .card_right > img {
                max-width: 370px; 
                height: 100%; 
                margin: 0%; 
                width: 360px;
            }
            `;
        return style;
    }
}

customElements.define("card-news", CardNews);
