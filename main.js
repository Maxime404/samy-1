const soustraction = require('./soustraction');
const concat = require('./concat');
const a = -1;
const b = -2;
const c = -3;
const d = -4;
let aetb;
let cetd;

aetb = soustraction(b, a);
cetd = soustraction(c, d);

const ab = concat(a, b);

console.log(aetb);
console.log(cetd);
console.log(ab);
