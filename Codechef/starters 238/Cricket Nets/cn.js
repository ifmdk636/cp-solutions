const fs = require("fs");

function solve() {
  const inputData = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

  if (inputData.length === 0) return;

  const T = parseInt(inputData[0]);
  let index = 1;

  for (let i = 0; i < T; i++) {
    const X = parseInt(inputData[index++]);

    let totalCost = 0;

    if (X <= 20) {
      totalCost = X * 10;
    } else {
      // 20 run pertama
      const fase1Cost = 20 * 10;

      // sisa run
      const sisaRun = X - 20;

      // setiap 2 run = 5 rupiah
      const fase2Cost = Math.floor(sisaRun / 2) * 5;

      totalCost = fase1Cost + fase2Cost;
    }

    console.log(totalCost);
  }
}

solve();
