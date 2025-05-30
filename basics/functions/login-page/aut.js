const users = [
    { username: 'dhito', password: '123', namaLengkap: 'Dhito Afrian', email: 'dhito111@gmail.com' },
    { username: 'fian', password: '456', namaLengkap: 'fianur', email: 'fian121@gmail.com' }
]

function login() {
    const uname = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const user = users.find(u => u.username === uname && u.password === pass);


    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        //localStorage Menyimpan data di browser (bertahan walau direfresh)
        //setItem =  menyimpan data(wajib string)
        //JSON.stringify()	Ubah object jadi string (biar bisa disimpan)
        tampilkanUser();
    } else {
        alert('username dan password salah!');
    }
}


function tampilkanUser () {
    const dataUser = JSON.parse(localStorage.getItem('loggedInUser'));
    //JSON.parse()	Ubah string JSON jadi object JS kembali

    if(dataUser) {
        document.querySelector('.loginForm').style.display = "none";
        document.querySelector('.userPage').style.display = "block";
        document.getElementById('userName').innerHTML = dataUser.namaLengkap;
    }
}

function logout(){
    localStorage.removeItem('loggedInUser');
    location.reload();
}

tampilkanUser();
