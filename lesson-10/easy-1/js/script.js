"use strict";

class Options {
    constructor(height, width, bg, fontSize, textAlign, textForDiv) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.textForDiv = textForDiv;
    }
    createNewElement() {
        let mainBlock = document.querySelector("#main");
        let newDiv = document.createElement("div");
        let newText = document.createTextNode(this.textForDiv);
        newDiv.appendChild(newText);
        mainBlock.appendChild(newDiv);
        newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
    }
}

let newElem = new Options(20, 20, "blue", "22px", "center", "Это новый Div");

console.log(newElem.createNewElement());