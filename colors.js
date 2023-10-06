import { randomIntInRange } from "./randomInRange.js"

export function getBlue() {
    let darkval = randomIntInRange(0, 50)
    return new Color(darkval, darkval, randomIntInRange(200, 255))
}
export function getRed() {
    let darkval = randomIntInRange(0, 50)
    return new Color(randomIntInRange(200, 255), darkval, darkval)
}
export function getGreen() {
    let darkval = randomIntInRange(0, 50)
    return new Color(darkval, randomIntInRange(200, 255), darkval)
}
export function getBlack() {
    let brightness = randomIntInRange(0, 50)
    return new Color(brightness, brightness, brightness)
}
export function getGray() {
    let brightness = randomIntInRange(100, 150)
    return new Color(brightness, brightness, brightness)
}
export function getYellow() {
    let whiteval = randomIntInRange(230, 255)
    return new Color(whiteval, whiteval, randomIntInRange(100, 150))
}
export function getWhite() {
    let brightness = randomIntInRange(230, 255)
    return new Color(brightness, brightness, brightness)
}
export function RGBtoHex(r, g, b) {
    return "#" + (r < 16 ? 0 : "") + r.toString(16) + (g < 16 ? 0 : "") + g.toString(16) + (b < 16 ? 0 : "") + b.toString(16)
}
export class Color{
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
    getHex(){
        return RGBtoHex(this.r,this.g,this.b)
    }
    getVariant(){
        let redVal = randomIntInRange(Math.max(this.color.r - 30, 0), Math.min(this.color.r + 30, 255))
        let greenVal = randomIntInRange(Math.max(this.color.g - 30, 0), Math.min(this.color.g + 30, 255))
        let blueVal = randomIntInRange(Math.max(this.color.b - 30, 0), Math.min(this.color.b + 30, 255))
        return new Color(redVal,greenVal,blueVal)
    }
}