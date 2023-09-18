
// const test = fetch(url)
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error(`HTTP error: ${response.status}`);
//                     }
//                     return response.json();
//                 });

// let fo = JSON.parse(test);
// console.log(fo);
// async function renderCatalog() {
//     const response = await fetch(url);
//     const data = await response.json();
//   }

const productsList = document.querySelector(".products-list");
const urlGpu = '/api/Gpus';

function createNode(element) {
	return document.createElement(element);
}

function append(parent, child) {
    return parent.appendChild(child);
}

function generationCart(obj) {
    const divProductCart = createNode('div');
    const divImgCart = createNode('div');
    const abtnProduct = createNode('a');
    const pPrice = createNode('p');
    const aBtnBuy = createNode('a');
    const aClear = createNode('a');
    // const imgClear =createNode('img');
    divProductCart.className = 'product-cart';
    divImgCart.className = 'img-cart';
    abtnProduct.className = 'btn-product';
    pPrice.className = 'p-price';
    aBtnBuy.className = 'btn-buy';

    append(aClear, imgClear);
    append(divImgCart, aClear);
    append(divProductCart, divImgCart);
    append(divProductCart, abtnProduct);
    append(divProductCart, aBtnBuy);
    append(divProductCart, pPrice);
}

fetch(url)
.then((response) => response.json())
.then(data => {
    console.log(data);
    for(let i=0; i <= data.length; i++)
    {
        const imgClear = createNode('img');
        const aClear = createNode('a');
        const divProductCart = createNode('div');
        const divImgCart = createNode('div');
        const abtnProduct = createNode('a');
        const pPrice = createNode('p');
        const aBtnBuy = createNode('a');

        divProductCart.className = 'product-cart';
        divImgCart.className = 'img-cart';
        abtnProduct.className = 'btn-product';
        pPrice.className = 'p-price';
        aBtnBuy.className = 'btn-buy';
        
        imgClear.src = data["imagename"][0];
        abtnProduct.textContent = data["name"][0];
        pPrice.textContent = data["price"][0];
        aBtnBuy.textContent = 'Купить';

        append(aClear, imgClear);
        append(divImgCart, aClear);
        append(divProductCart, divImgCart);
        append(divProductCart, abtnProduct);
        append(divProductCart, aBtnBuy);
        append(divProductCart, pPrice);

        append(productsList, divProductCart);


    }


});






  
  
