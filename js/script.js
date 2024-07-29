const plusButton = document.getElementById("plus");
const quantityElem = document.getElementById("quantity");
const minusButton = document.getElementById("minus");
const unitPriceElem = document.getElementById("unitPrice")
const totalPriceElem = document.getElementById("total")

let quantity = parseInt(quantityElem.innerText);

plusButton.addEventListener("click", incrementQty);
minusButton.addEventListener("click", decrementQty);

function incrementQty() {
  quantity += 1;
  quantityElem.innerText = quantity;
  updateTotalPrice();
}

function decrementQty() {
  if (quantity > 0) {
    quantity -= 1;
    quantityElem.innerText = quantity;
    updateTotalPrice();
  }
}

function updateTotalPrice() {
const unitPrice = parseInt(unitPriceElem.innerText);
const totalPrice = quantity * unitPrice;
totalPriceElem.innerText = `${totalPrice} $`;
}
