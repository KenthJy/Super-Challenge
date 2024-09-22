import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";
import { placeholderPropertyObj} from "./properties/placeholderPropertyObj.js";


function getPropertyHtml(properties) {

  if (properties.length === 0){
    properties = [placeholderPropertyObj]
  }  
  
   const render = properties.map(function(properties) {
    const totalM2 = properties.roomsM2.reduce(function(total, sqm){
        return total + sqm
    }, 0)
    return `
    <section class="card">
        <img src="/images/${properties.image}" alt="Property image">
        <div class="card-right">
            <h2>${properties.propertyLocation}</h2>
            <h3>${properties.priceGBP} GBP</h3>
            <p>${properties.comment}</p>
            <h3>${totalM2} m&sup2;</h3>
        </div>
    </section> 
 `;
   }).join('')

   return render
}




/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)