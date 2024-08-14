/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 *
 * Contoh:
 * Jika dalam direktori ini terdapat folder `aaa`, `bbb`, dan `ccc`,
 * maka file `out.txt` akan berisi -> aaa,bbb,ccc
 *
 * Catatan:
 * - Anda bisa men-generate kembali folder-folder dengan menjalankan berkas `generate-folders.js`
 * - Hindari untuk mengubah kode yang sudah ada sebelumnya
 */

const fs = require('fs');
const path = require('path');

function readDirAndWriteFile() {
  const currentDir = __dirname;

  fs.readdir(currentDir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // Filter hanya folder
    const folders = files
      .filter((file) => file.isDirectory())
      .map((file) => file.name);

    // Urutkan folder secara ascending (A-Z)
    folders.sort();

    // Gabungkan nama folder dengan koma
    const folderNames = folders.join(',');

    // Tulis ke file out.txt
    fs.writeFile('out.txt', folderNames, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('Folders written to out.txt successfully.');
    });
  });
}

readDirAndWriteFile();

