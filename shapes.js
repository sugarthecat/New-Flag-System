import { Color } from "./colors.js";
import { randomIntInRange } from "./randomInRange.js";

export class Rectangle {

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} w 
     * @param {Number} h 
     * @param {Color} color 
     */
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    /**
     * 
     * @param {RenderingContext} context 
     * @param {HTMLElement} canvas 
     */
    Draw(context, canvas) {
        context.fillStyle = this.color.getHex();
        context.fillRect(canvas.width * this.x, canvas.height * this.y, canvas.width * this.w, canvas.height * this.h)
    }
    /**
     * 
     */
    getVariant() {
        return new Rectangle(this.x, this.y, this.w, this.h, this.color.getVariant())
    }
}