"use strict";

const fs = require("fs");

function solve() {
    // Membaca input dan memisahkan berdasarkan spasi/baris baru
    const input = fs.readFileSync(0, "utf8").split(/\s+/);
    
    // Mengambil X dan Y sebagai integer
    const X = parseInt(input[0]);
    const Y = parseInt(input[1]);

    // Contoh logika: menjumlahkan X dan Y
    if(Y>X) {
        console.log(100)
    } else if(Y == X) {
        console.log(0) 
    } else if (Y<X) {
        console.log(0)
    }
}

solve();