const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const quantityElems = document.querySelectorAll(".quantity");
const unitPriceElems = document.querySelectorAll(".unit-price");
const trashIcons = document.querySelectorAll(".delete");
const likeButton = document.querySelectorAll(".fa-heart");
const totalPriceElem = document.getElementById("total");

for (let i = 0; i < plusButtons.length; i++) {
  const button = plusButtons[i];

  button.addEventListener("click", () => {
    incrementQty(i);
  });
}

for (let i = 0; i < minusButtons.length; i++) {
  const button = minusButtons[i];

  button.addEventListener("click", () => {
    decrementQty(i);
  });
}

for (let i = 0; i < trashIcons.length; i++) {
  const icon = trashIcons[i];
  const card = icon.closest(".card");
  // const index = i;

  icon.addEventListener("click", () => {
    card.remove();
    updateTotalPrice();
    // updateTotal(index);
  });
}

for (let i = 0; i < likeButton.length; i++) {
  const button = likeButton[i];

  button.addEventListener("click", () => {
    addStyle(i);
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
  const quantityElems = document.querySelectorAll(".quantity");
  const unitPriceElems = document.querySelectorAll(".unit-price");

  quantityElems.forEach((quantityElem, index) => {
    const quantity = parseInt(quantityElem.innerText);
    const unitPrice = parseInt(unitPriceElems[index].innerText);

    total += quantity * unitPrice;
  });

  totalPriceElem.innerText = total + " $";
}

function addStyle(index) {
  const icon = likeButton[index];
  if (icon.style.color === "red") {
    icon.style.color = "";
  } else {
    icon.style.color = "red";
  }
}
