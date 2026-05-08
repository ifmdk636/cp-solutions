const fs = require('fs');

function winParty() {
    // Membaca input dari stdin (standard input)
    const input = fs.readFileSync(0, 'utf8').split(/\s+/).map(Number);
    
    let N = input[0];
    let K = input[1];

    // Menggunakan Math.floor untuk merepresentasikan simbol floor ⌊N/2⌋
    let target = Math.floor(N / 2) + 1;

    if (K >= target) {
        // Jika sudah mayoritas, tidak butuh tambahan kursi
        console.log(0);
    } else {
        // Rumusnya adalah target dikurangi kursi saat ini
        let resultMin = target - K;
        console.log(resultMin);
    }
}

winParty();