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



