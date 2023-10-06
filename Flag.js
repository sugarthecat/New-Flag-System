import { randomItem, getFrontWeightedItem } from "./randomItem.js";
import { getBlack, getBlue, getGray, getGreen, getRed, getWhite, getYellow } from "./colors.js";
import { Rectangle } from "./shapes.js";
import { randomIntInRange } from "./randomInRange.js";

/**
 * Represents a flag
 */
export default class Flag{
    canvas;
    context;
    constructor(blockGeneration){
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext('2d');
        this.shapes = []
        if(blockGeneration){
            return;
        }
        //get color palette
        let colors = [getRed(),getBlue(),getGreen(),getBlack(),getGray()];
        let lightColor = randomItem([getWhite(),getWhite(),getYellow()])
        let darkColors = [getFrontWeightedItem(colors,2),getFrontWeightedItem(colors,2)];
        //get pattern
        let patterns = ["horizontal tricolor","vertical tricolor","vertical bicolor"]
        let pattern = getFrontWeightedItem(patterns,2)
        if(pattern == "horizontal tricolor"){
            this.shapes = [
                new Rectangle(0,0,1,1,lightColor),
                new Rectangle(0,0,1/3,1,darkColors[0]),
                new Rectangle(2/3,0,1/3,1,darkColors[1])
            ]
        }else if(pattern == "vertical tricolor"){
            this.shapes = [
                new Rectangle(0,0,1,1,lightColor),
                new Rectangle(0,0,1,1/3,darkColors[0]),
                new Rectangle(0,2/3,1,1/3,darkColors[1])
            ]
        }else if(pattern == "vertical bicolor"){
            this.shapes = [
                new Rectangle(0,0,1,1,lightColor),
                new Rectangle(0,(randomIntInRange(0,2))/2,1,1/2,darkColors[0])
            ]
        }
    }
    /**
     * Gets a variant of the flag
     * @returns {Flag} the occupied variant
     */
    getVariant(){
        let newFlag = new Flag(true)
        for(let i = 0; i<this.shapes.length; i++){
            newFlag.shapes.push(this.shapes[i].getVariant());
        }
        return newFlag
    }
    /**
     * Gets a flag canvas
     * @returns {Element} The generated canvas
     */
    getFlagCanvas(){
        return this.canvas;
    }
    /**
     * Renders the flag in the flag canvas.
     */
    drawFlag(){
        for(let i = 0; i<this.shapes.length; i++){
            this.shapes[i].Draw(this.context,this.canvas)
        }
    }
}