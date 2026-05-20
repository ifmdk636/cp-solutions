const fs = require("fs");

function solve() {
  // 1. Baca seluruh input sebagai string, bersihkan spasi di ujung, lalu pecah menjadi array
  const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

  // 2. Ambil nilai X, Y, Z langsung dari array input dan ubah ke angka
  const X = Number(input[0]);
  const Y = Number(input[1]);
  const Z = Number(input[2]);

  let totalAustralia = X + Z;
  let tempIndia = Y;
  let totalIndia = 0;

  // 3. Logika pengecekan skor
  if (totalAustralia > tempIndia) {
    totalIndia = totalAustralia - tempIndia + 1;
  } else if (totalAustralia === tempIndia) {
    totalIndia = 1; // Cukup butuh 1 angka untuk melewati skor Australia
  } else {
    totalIndia = 0; // India sudah menang
  }

  console.log(totalIndia);
}

solve();
