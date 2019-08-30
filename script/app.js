'use strict';

// checkbox

const checkbox = document.querySelectorAll('#discount-checkbox');

checkbox.forEach( function(item) {
  item.addEventListener( 'click', function() {
    if (this.checked) {
      this.nextElementSibling.classList.add('checked');
    } else {
      this.nextElementSibling.classList.remove('checked');
    }
    
  })
})

// cart

const cartButton = document.querySelector('#cart');
const cartWindow = document.querySelector('.cart');
const cartClose  = document.querySelector('.cart-close');

cartButton.addEventListener( 'click', function() {
  cartWindow.style.display = 'flex';
  document.body.style.overflow = 'hidden';
})

cartClose.addEventListener( 'click', () => {
  cartWindow.style.display = 'none';
  document.body.style.overflow = '';
})


// add to cart

const goodsCard = document.querySelectorAll('.goods .card');
const cartInner = document.querySelector('.cart-wrapper');
const cartStatus = document.querySelector('#cart-empty');
let cartCounter = document.querySelector('.counter');

goodsCard.forEach( (card) => {
  let addToCartButton = card.querySelector('.btn')
  addToCartButton.addEventListener( 'click', () => {
    let clonedCard = card.cloneNode(true);
    cartInner.appendChild(clonedCard)
    showData();

    const removeBtn = clonedCard.querySelector('.btn');
    removeBtn.innerHTML = "удалть из корзины"
    removeBtn.addEventListener( 'click', () => {
      clonedCard.remove();
      showData();
    })
  })
})

function showData() {
  let cardsInCart = cartInner.querySelectorAll('.card');
  cartCounter.innerHTML = cardsInCart.length
  const cartTotal = document.querySelector('.cart-total span');
  let cardPrice = cartInner.querySelectorAll('.card-price');
  let sum = 0;
  
  cardPrice.forEach( (elem) => {
   let price = parseFloat(elem.textContent);
   sum += price;
  })

  cartTotal.innerHTML = sum;

  if (cardsInCart.length !== 0) {
    cartStatus.remove();
  } else {
    cartInner.appendChild(cartStatus);
  }
}










