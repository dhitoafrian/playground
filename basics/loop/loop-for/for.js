// 1. SEGITIGA KEBALIK
let string = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) string += '&nbsp;';
    for (let k = 0; k < 5 - i; k++) string += '* ';
    string += '<br>';
}
document.getElementById('segitiga-kebalik').innerHTML = string;

//2. JEJER GENJANG
string = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) string += '&nbsp;';
    for (let k = 0; k < 5; k++) string += '* ';
    string += '<br>';
}
document.getElementById('jajar-genjang').innerHTML = string;

//3. SEGITIGA NORMAL
string = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > i; j--) string += '&nbsp;';
    for (let k = 0; k < i; k++) string += '* ';
    string += '<br>';
}
document.getElementById('segitiga-normal').innerHTML = string;

//4. BELAH KETUPAT
string = '';
for (let i = 0; i <= 5; i++) {
    for (let j = 5; j > i; j--) string += '&nbsp;';
    for (let k = 0; k < i; k++) string += '* ';
    string += '<br>';
}
for (let i = 4; i > 0; i--) {
    for (let j = 4; j >= i; j--) string += ' ';
    for (let k = 0; k < i; k++) string += '* ';
    string += '<br>';
}
document.getElementById('Belah-Ketupat').innerHTML = string;


//5. PERSEGI
string = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        string += (i === 0 || i === 4 || j === 0 || j === 4) ? '* ' : '  ';
    }
    string += '<br>';
}
document.getElementById('Persegi').innerHTML = string;

//6. PERSEGI PANJANG
string = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        string += (i === 0 || i === 4 || j === 0 || j === 9) ? '* ' : '&nbsp;&nbsp;';
    }
    string += '<br>';
}
document.getElementById('Persegi-Panjang').innerHTML = string;
