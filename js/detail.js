var product = document.querySelector('.products')
var products = []
let contenedor = document.querySelector(".info-container");

const regresar = () => {
    location.href = "../products.html";
}

addEventListener('load', ()=>{
products = JSON.parse(localStorage.getItem('products'))
detail = JSON.parse(localStorage.getItem('detail'))

var find = products.find(x =>x.id == detail)

    contenedor.innerHTML = `
    <div class="text-container">
            <h2 class="color-text">${find.name}</h2>
            <p>
            ${find.description}
            </p>
            <p class="price-text">$ ${find.price}</p>
            <div class="button-wrapper">
            <button class="add-to-cart">Comprar</button>
            
            <button class="add-to-cart2" onclick="regresar()">Regresar</button>
            </div>
        </div>
        <div class="wrapper">
        <img class="imagensita" width="300px" src="${find.image}" alt="">
        </div>
        `;

    let img = document.querySelector(".imagensita");
    img.addEventListener('load', function() {
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches()
        for (var swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
                console.log(swatch, swatches[swatch].getHex())
                // = swatches[0].getHex();
            }
        }
        let vibrante = vibrant.VibrantSwatch.getHex();
        
        /*
         * Results into:
         * Vibrant #7a4426
         * Muted #7b9eae
         * DarkVibrant #348945
         * DarkMuted #141414
         * LightVibrant #f3ccb4
         */
        console.log(vibrant);
        console.log(vibrante);
        document.querySelector(".wrapper").style.background = vibrante;
        document.querySelector(".add-to-cart").style.background = vibrante;
        let vibranteLigero = vibrant.LightVibrantSwatch.getHex();
        document.querySelector("header").style.background = vibranteLigero;

    });
    
})



function see(){
    if (localStorage.getItem('carrito') == null) {
        localStorage.setItem('carrito', '[]')
        console.log('No existe')
    }
}