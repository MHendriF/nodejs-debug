/**
 * @TODO
 * 1. Cetak jenis platform pada Terminal
 * 2. Hentikan proses dengan status code non-zero (selain 0)
 */

// Tulis jawaban di bawah ini
const os = require('os');

// 1. Cetak jenis platform pada Terminal
console.log(os.platform());

// 2. Hentikan proses dengan status code non-zero
process.exit(1);

