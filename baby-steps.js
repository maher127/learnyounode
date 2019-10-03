let tab = process.argv;
let total = 0;
for (let i = 2; i < tab.length; i++) {
  total = Number(tab[i]) + total;
}
console.log(total);
