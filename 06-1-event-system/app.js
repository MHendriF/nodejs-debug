const EventEmitter = require('events');

const BasicMath = {
  add: (a, b) => console.log(a + b),
  subtract: (a, b) => console.log(a - b),
};

// Tulis kodemu di bawah ini ...
// Buat objek eventEmitter yang merupakan instance dari class EventEmitter
const eventEmitter = new EventEmitter();

// Tambahkan fungsi add dari BasicMath sebagai listener dari event calculate
eventEmitter.on('calculate', BasicMath.add);

// Tambahkan fungsi subtract sebagai one-time listener dari event calculate
eventEmitter.once('calculate', BasicMath.subtract);

// Bangkitkan event calculate dengan parameter angka 2 dan 3
eventEmitter.emit('calculate', 2, 3);

// Bangkitkan event calculate dengan parameter angka 5 dan 6
eventEmitter.emit('calculate', 5, 6);
