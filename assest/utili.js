// Get inner text by id
function getTextById(elementId) {
  const element = document.getElementById(elementId);
  return element.innerText;
}

// Set text by id
function setTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// bg color  by id
function getBgColorById(elementId) {
  const element = document.getElementById(elementId);
  element.style.backgroundColor = "#1DD100";
  element.style.color = "white";
}

// create element new tr
function newTrCreate(elementId) {
  const seatTable = document.getElementById("seat-table");
  const newTr = document.createElement("tr");
  newTr.innerHTML = `<td class="uppercase">${elementId} </td>
                    <td>Economoy</td>
                    <td class="text-right">550</td>`;
  return seatTable.appendChild(newTr);
}

// copupon code function
function copupon(uniqueSeat) {
  const applyBtn = document.getElementById("apply-btn");
  if (uniqueSeat.length >= 4) {
    applyBtn.removeAttribute("disabled");
  }
  applyBtn.addEventListener("click", function () {
    const copuponInput = document.getElementById("copupon-input").value;
    const totalPrice = getTextById("total-price");
    let grandTotal = 0;
    if (copuponInput === "NEW15") {
      grandTotal = totalPrice - totalPrice * 0.15;
    } else if (copuponInput === "Couple20") {
      grandTotal = totalPrice - totalPrice * 0.2;
    }
    setTextById("grand-total", grandTotal);
  });
}
