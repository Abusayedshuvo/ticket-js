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
                    <td>550</td>`;
  return seatTable.appendChild(newTr);
}
