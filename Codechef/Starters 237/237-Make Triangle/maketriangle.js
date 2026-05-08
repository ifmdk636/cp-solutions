const fs = require('fs');

function solve() {
    // 1. Ambil semua input dan filter string kosong agar index tidak berantakan
    const input = fs.readFileSync(0, 'utf8');
    const lines = input.split(/\s+/).filter(x => x.length > 0);

    let currentLine = 0;

    function next() {
        return lines[currentLine++];
    }

    // 2. Baca jumlah Test Cases (T)
    // Hampir semua soal CodeChef menggunakan format ini
    let T = parseInt(next());

    // Gunakan loop untuk memproses setiap test case
    while (T--) {
        // 3. Ambil nilai X, Y, Z untuk setiap test case
        // Gunakan BigInt jika angka di soal sangat besar (> 10^15)
        let X = Number(next());
        let Y = Number(next());
        let Z = Number(next());

        // Validasi jika input gagal dibaca (akhir file)
        if (isNaN(X) || isNaN(Y) || isNaN(Z)) break;

        // --- LOGIKA UTAMA ---
        if (X + Y > Z && Y + Z > X && X + Z > Y) {
            console.log("0");
        } else {
            let output = 0;

            if (X + Y <= Z) {
                output = Z - (X + Y) + 1;
            } else if (Y + Z <= X) {
                output = X - (Y + Z) + 1;
            } else if (X + Z <= Y) {
                output = Y - (X + Z) + 1;
            }
            console.log(output.toString());
        }
    }
}

solve();