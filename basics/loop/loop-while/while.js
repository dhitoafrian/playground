let input;
let no; 
const btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', () => {
  let isValidInput = false;
  let attemptCount = 0;
  const maxAttempts = 3;

  while (!isValidInput && attemptCount < maxAttempts) {
    input = prompt(`masukkan angka pengecekan laptop dari 1-10 (percobaan: ${attemptCount}/${maxAttempts})`)
    attemptCount++;

    if (input === null) {
      alert('anda membatalkan input')
      break;
    }

    if (input.trim() == '') {
      alert('harap masukkan input terlebih dahulu')
      attemptCount--;
      continue;
    }
    no = parseInt(input);

    if (isNaN(no)) {
      alert('masukkan angka!')
      attemptCount--
      continue;
    }


    
    if (no < 1 || no > 10) {
      alert('masukkan angka 1-10');
      continue;
    } else if (no <= 6) {
      alert(`laptop nomer ${no} berfungsi dengan baik`)
    } else if (no === 10) {
      alert(`laptop nomer ${no} sedang dalam perbaikan`);
    } else {
      alert(`laptop nomer ${no} sedang di pinjam`);
    }
    isValidInput = true;


  };
  if (!isValidInput && attemptCount >= maxAttempts) {
    alert('percobaan habis, silahkan coba lagi');
  }
});
