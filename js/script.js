const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const quantityElems = document.querySelectorAll(".quantity");
const unitPriceElems = document.querySelectorAll(".unit-price");
const trashIcons = document.querySelectorAll(".delete");
const totalPriceElem = document.getElementById("total");

for (let i = 0; i < plusButtons.length; i++) {
  const button = plusButtons[i];
  const index = i;

  button.addEventListener("click", () => {
    incrementQty(index);
  });
}

for (let i = 0; i < minusButtons.length; i++) {
  const button = minusButtons[i];
  const index = i;

  button.addEventListener("click", () => {
    decrementQty(index);
  });
}

for (let i = 0; i < trashIcons.length; i++) {
  const icon = trashIcons[i];
  const card = icon.closest(".card");
  const index = i;

  icon.addEventListener("click", () => {
    card.remove();
    updateTotal(index);
  });
}

function incrementQty(index) {
  const quantityElem = quantityElems[index];
  let quantity = parseInt(quantityElem.innerText);
  quantity += 1;
  quantityElem.innerText = quantity;
  updateTotalPrice();
}

function decrementQty(index) {
  const quantityElem = quantityElems[index];
  let quantity = parseInt(quantityElem.innerText);
  if (quantity > 0) {
    quantity -= 1;
    quantityElem.innerText = quantity;
    updateTotalPrice();
  }
}

function updateTotalPrice() {
  let total = 0;
  quantityElems.forEach((quantityElem, index) => {
    const quantity = parseInt(quantityElem.innerText);
    const unitPrice = parseInt(unitPriceElems[index].innerText);
    total += quantity * unitPrice;
  });
  totalPriceElem.innerText = total;
}
function updateTotal(index) {
  const quantityElem = parseInt(quantityElems[index].innerText);
  const unitPrice = parseInt(unitPriceElems[index].innerText);
  totalPriceElem.innerText -= unitPrice * quantityElem;

}
