let input = document.querySelector("input")



let productHTML = ``;
products.forEach(product => {
productHTML +=  
  `<div class="card-container">
        <div class="first-section">
          <img src="${product.image}" alt="" class="img-pic">
        </div>
        <div class="second-section">
          <p>${product.name}</p>
          <p class="price-">${product.price}</p>
          <div class="btn-Cart">
              <button class="btn  js-cart search" data-product-id="${product.productId}">Add-to-Cart</button>
          </div>
        </div>
     </div>
   `
});

document.querySelector(".main").innerHTML = productHTML;


document.querySelectorAll(".js-cart")
.forEach(function(btn) {
    btn.addEventListener("click",function() {
        console.log(btn.dataset.productId);
    })
})

input.addEventListener("input",function(){
     var matching = products.filter((product)=> {
      return product.name.startsWith(input.value);
     })
     var newuser=""
     matching.forEach((elem)=> {
      newuser += `<div class="card-container">
        <div class="first-section">
          <img src="${elem.image}" alt="" class="img-pic">
        </div>
        <div class="second-section">
          <p>${elem.name}</p>
          <p class="price-">${elem.price}</p>
          <div class="btn-Cart">
              <button class="btn  js-cart  search" data-product-id="${elem.productId}">Add-to-Cart</button>
          </div>
        </div>
     </div> `
     })
document.querySelector(".main").innerHTML = newuser;
let search = document.querySelectorAll(".search")
search.forEach(function(btns) {
    btns.addEventListener("click",function() {
        console.log(btns.dataset.productId);
    })
})
})
