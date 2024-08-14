setTimeout(() => {
  console.log(process.uptime()); // Cetak uptime dari proses
  console.log(require('os').uptime()); // Cetak uptime dari sistem operasi
  console.log(require('os').totalmem()); // Cetak total memori yang tersedia di sistem operasi
  console.log(process.memoryUsage().heapTotal); // Cetak total heap memori
}, 1000);
