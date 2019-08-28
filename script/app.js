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

goodsCard.forEach( (card) => {
  let addToCartButton = card.querySelector('.btn')
  addToCartButton.addEventListener( 'click', () => {
    let clonedCard = card.cloneNode(true);
    cartInner.appendChild(clonedCard)
    cartStatus.remove();
    cartLength();
  })
})

function cartLength() {
  let cartCounter = document.querySelector('.counter');
  let amountCardsInCart = document.querySelectorAll('.cart-wrapper .card')
  cartCounter.innerHTML = amountCardsInCart.length
}



