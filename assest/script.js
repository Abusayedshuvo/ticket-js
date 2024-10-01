let buySeat = [];
let uniqueSeat = [];

function seatClick(seatId) {
  getBgColorById(seatId);
  buySeat.push(seatId);
  if (buySeat.length > 0) {
    for (let i of buySeat) {
      if (uniqueSeat.includes(i) === false) {
        uniqueSeat.push(i);
        newTrCreate(seatId);
      }
    }
  }
  setTextById("seat-count", uniqueSeat.length);
  setTextById("available-seat", 40 - uniqueSeat.length);
  setTextById("total-price", uniqueSeat.length * 550);
}
