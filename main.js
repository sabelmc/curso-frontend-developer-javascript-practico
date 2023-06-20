const menuEmail =  document.querySelector(".navbar-email");
const DesktopMenu =  document.querySelector('.desktop-menu');

const burgerButton =  document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');

const carritoIcon =  document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector(".cards-container");




menuEmail.addEventListener('click', toggleDestopMenu);
burgerButton.addEventListener('click', toggleBurgerButton);
carritoIcon.addEventListener('click', toggleCarrito);


function toggleBurgerButton(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
       
    mobileMenu.classList.toggle('inactive');
    
}
    


function toggleCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');

    }
    DesktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}


function toggleDestopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    DesktopMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
    prodName: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


productList.push({
    prodName: 'tablet',
    price: 350,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    prodName: 'Desk',
    price: 240,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
            //product = {name, price, image} --> product.image
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
    
            const productInfo= document.createElement('div');
            productInfo.classList.add('product-info');
    
                const productInfoDiv= document.createElement('div');
    
                    const productPrice = document.createElement('p');
                    productPrice.innerText = '$' + product.price;
    
                    const productName = document.createElement('p');
                    productName.innerText = product.prodName;
    
                const productInfoFigure = document.createElement('figure');
                    const productImgCart = document.createElement('img');
    
                    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoDiv.append(productPrice, productName);
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
        
        cardsContainer.appendChild(productCard);
      
    }
}
renderProducts(productList);

/* <!--  <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> --> */

