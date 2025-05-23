const inputTxt = document.getElementById('inputTxt');
const btn = document.querySelector('.btn');
const output = document.querySelector('.outputTxt');
const p = document.querySelector('p');



btn.addEventListener('click', () => {
    const nilaiInput = inputTxt.value;

    switch (nilaiInput.toLowerCase()) {
        case 'senin':
            output.textContent = 'Hari lembur';
            break;
        case 'selasa':
            output.textContent = 'hari biasa';
            break
        case 'rabu':
            output.textContent = 'hari biasa';
            break;
        case 'kamis':
            output.textContent = 'hari lembur';
            break;
        case 'jumat':
            output.textContent = 'hari fokus full'
            break;
        case 'sabtu':
            output.textContent = 'hari libur'
            break;
        case 'minggu':
            output.textContent = 'hari healing';
            break;
        default:
            output.textContent = 'MASUKKAN NAMA HARI';
            output.style.color = 'red'
    }
})
