let buySeat = [];
let uniqueSeat = [];

function seatClick(seatId) {
  buySeat.push(seatId);
  if (buySeat.length > 0) {
    for (let i of buySeat) {
      if (uniqueSeat.includes(i) === false) {
        uniqueSeat.push(i);
        newTrCreate(seatId);
      }
    }
  }

  if (uniqueSeat.length >= 4) {
    const allButton = document.querySelectorAll("#all-seat button");
    for (let i of allButton) {
      i.setAttribute("disabled", true);
    }
    alert("you can't buy more than 4 ticket");
  }
  getBgColorById(seatId);
  setTextById("seat-count", uniqueSeat.length);
  setTextById("available-seat", 40 - uniqueSeat.length);
  setTextById("total-price", uniqueSeat.length * 550);
  setTextById("grand-total", uniqueSeat.length * 550);
  copupon(uniqueSeat);
}
