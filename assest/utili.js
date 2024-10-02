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
    const copuponBox = document.getElementById("copupon-box");
    let grandTotal = totalPrice;
    if (copuponInput === "NEW15") {
      grandTotal = totalPrice - totalPrice * 0.15;
      copuponBox.classList.add("hidden");
    } else if (copuponInput === "Couple20") {
      grandTotal = totalPrice - totalPrice * 0.2;
      copuponBox.classList.add("hidden");
    }
    setTextById("grand-total", grandTotal);
  });
}

// alert and disabled button function
function alertAndDisabled(uniqueSeat) {
  if (uniqueSeat.length >= 4) {
    alert("you can't buy more than 4 ticket");
    const allButton = document.querySelectorAll("#all-seat button");
    for (let i of allButton) {
      i.setAttribute("disabled", true);
    }
  }
}
