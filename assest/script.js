let buySeat = [];
let uniqueSeat = [];

// function seatClick(seatId) {
//   buySeat.push(seatId);
//   if (buySeat.length > 0) {
//     for (let i of buySeat) {
//       if (uniqueSeat.includes(i) === false) {
//         uniqueSeat.push(i);
//         newTrCreate(seatId);
//       }
//     }
//   }

//   alertAndDisabled(uniqueSeat);
//   getBgColorById(seatId);
//   setTextById("seat-count", uniqueSeat.length);
//   setTextById("available-seat", 40 - uniqueSeat.length);
//   setTextById("total-price", uniqueSeat.length * 550);
//   setTextById("grand-total", uniqueSeat.length * 550);
//   copupon(uniqueSeat);
// }

const allButtons = document.querySelectorAll("#all-seat button");
for (let btn of allButtons) {
  btn.addEventListener("click", function () {
    const seatId = btn.id;
    seatClick(seatId);
  });
}

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

  alertAndDisabled(uniqueSeat);
  getBgColorById(seatId);
  setTextById("seat-count", uniqueSeat.length);
  setTextById("available-seat", 40 - uniqueSeat.length);
  setTextById("total-price", uniqueSeat.length * 550);
  setTextById("grand-total", uniqueSeat.length * 550);
  copupon(uniqueSeat);
}
