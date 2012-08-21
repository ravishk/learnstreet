function addQuantityToCart(quantity, selected, price) {
     return price * quantity;
}

function getQuantityMessage(quantity) {
    if (quantity > 0) { 
        return 'In stock';
    } else if (quantity == 0) { 
        return 'Out of stock';
    } else if (quantity == -1){ 
         return 'Select a fruit before proceeding';
    }
}