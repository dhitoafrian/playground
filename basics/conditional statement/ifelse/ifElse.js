let numberInput = document.getElementById('number');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let nilai = parseFloat(numberInput.value);
    if (nilai >= 90) {
        alert('nilai anda A')
    } else if (nilai >= 80) {  
        alert('nilai anda B')
    } else if (nilai >= 75) {
        alert('nilai anda C')
    } else if (nilai < 75) {
        alert('nilai di bawah kkm, REMIDIAL!!')
    } else {
        alert('masukkan angka!')

    }
})

