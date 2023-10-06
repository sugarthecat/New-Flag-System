import Flag from "./Flag.js";

let flagContainer = document.getElementById("majorflag");
let flagVariantContainer = document.getElementById("variants");
let flagex = new Flag()
flagContainer.appendChild(flagex.getFlagCanvas());
flagex.drawFlag();

for(let i = 0; i<6; i++){
    let flagVariant = flagex.getVariant();
    console.log(flagVariant)
    let flagVariantDiv = document.createElement("div");
    flagVariantDiv.appendChild(flagVariant.getFlagCanvas())
    flagVariantContainer.appendChild(flagVariantDiv)
    flagVariant.drawFlag();
}
