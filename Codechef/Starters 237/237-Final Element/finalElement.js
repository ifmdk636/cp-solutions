"use strict";

const fs = require("fs");

function solve() {
    const input = fs.readFileSync(0, "utf8");
    const lines = input.split(/\s+/);
    
    let currentLine = 0;
    function next() {
        return lines[currentLine++];
    }

    const T = parseInt(next());
    if (isNaN(T)) return; // Cek jika T bukan angka

    for (let t = 0; t < T; t++) {
        const N_val = parseInt(next()); 
        let A = [];
        
        for (let i = 0; i < N_val; i++) {
            A.push(parseInt(next()));
        }

        // --- Perbaikan Logika Reduksi ---
        while (A.length > 1) {
            let nextArray = [];
            // Gunakan A.length-1 karena panjang A berubah setiap putaran
            for (let i = 0; i < A.length - 1; i++) {
                nextArray.push(A[i] ^ A[i + 1]);
            }
            A = nextArray; // A diperbarui dengan hasil XOR terbaru
        }

        // Output hasil elemen terakhir (A[0])
        console.log(A[0]);
    }
}

solve();