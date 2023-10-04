var unit = 250;
var pay = 0;

document.getElementById('unit').innerHTML = "Total Unit = " + unit;

if (unit <= 50) {
    pay = unit * 1;
} else if (unit <= 150) {
    pay = 50 * 1 + (unit - 50) * 2;
} else if (unit <= 250) {
    pay = 50 * 1 + 100 * 2 + (unit - 150) * 3;
} else if (unit > 250) {
    pay = 50 * 1 + 100 * 2 + 150 * 3 + (unit - 250) * 4;
}

if (unit > 150) {
    pay = pay + pay * 0.2;
}

document.getElementById('pay').innerHTML = "Bill Payment = " + pay;


