class ButtonCount extends HTMLElement{
    constructor(){
        super();
        this.count = 0;
        let button = document.createElement("button");
        button.value = "Time Clicked: "+this.count.toString();
        let shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(button);

        let buttonElem = shadow.querySelector("button");
        buttonElem.innerHTML = "Time Clicked: "+this.count.toString();
        buttonElem.addEventListener("click", ()=>{
            this.count++;
            buttonElem.innerHTML = "Time Clicked: "+this.count.toString();
        });
    }
}

customElements.define("button-count", ButtonCount);
