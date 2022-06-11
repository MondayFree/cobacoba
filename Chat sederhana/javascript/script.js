// mengambil element
const tombolKirim = document.querySelector('.tombol-kirim');
const inputTeks = document.querySelector('.ketik');
const chat = document.querySelector('.chat');


// function membuat element untuk pesan
let buatElement = function(inputPesan) {
    let kotak = document.createElement('div');
    kotak.classList.add('kotak');
    let pesan = document.createElement('p');
    pesan.classList.add('pesan');
    let isiPesan = document.createTextNode(inputPesan);

    pesan.appendChild(isiPesan);
    kotak.appendChild(pesan);

    return kotak;
}


// function untuk membuat teks random
let teksRandom = function() {
    let acak = Math.random();

    let teks;
    if( acak < 0.3 ) {
        teks = 'Lorem ipsum dolor sit amet.';
    } else if( acak >= 0.3 && acak < 0.5) {
        teks = 'Lorem ipsum dolor sit amet consectetu.';
    } else if( acak >= 0.5 && acak < 0.7 ) {
        teks = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nesciunt enim nobis cor!';
    } else if( acak >= 0.7 && acak < 0.9 ) {
        teks = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A facere accusamus in voluptatibus laborum atque corrupti';
    } else {
        teks = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi sit dignissimos quam. Laudantium cum labore quo. Voluptatum ad alias inventore tempore nesciunt ea. Amet!';
    }

    return teks;
}


// ketika tombol kirim ditekan
tombolKirim.addEventListener('click', function(e) {
    // mengambil input teks
    let teks = inputTeks.value;

    // cek apakah pesan kosong
    if( teks.length == 0 ) {
        return;
    }

    // memanggil function element untuk pesan
    let element = buatElement(teks);
    element.classList.add('kiri');

    // tambahkan element user ke chat
    chat.appendChild(element);

    // kosongkan input
    inputTeks.value = '';

    // tambahkan element computer ke chat
    let elementComp = buatElement(teksRandom());
    setTimeout(function() {
        chat.appendChild(elementComp);
    }, 1000);

    e.preventDefault();
});


// ambil element
const menu = document.querySelector('.menu');
const panjang = document.querySelector('.panjang');

// variabel timer
let timer;
let timer2;

// function setTimeout
let waktu = function() {
    timer = setTimeout(function() {
        panjang.classList.toggle('animasi');
    }, 2000);

    timer2 = setTimeout(function() {
        panjang.classList.toggle('aksi2');
        panjang.classList.toggle('aksi1');
        panjang.classList.toggle('animasi');
        berah = true;
    }, 2600);
}

// patokan
let berah = true;

// jika menu ditekan
menu.addEventListener('click', function(e) {

    if( berah ) {
        // tekan ke 1
        panjang.classList.toggle('aksi1');
        panjang.classList.toggle('aksi2');
        berah = false;
        waktu();
    } else {
        // tekan ke 2
        clearTimeout(timer);
        clearTimeout(timer2);
        panjang.classList.toggle('aksi1');
        panjang.classList.toggle('aksi2');
        panjang.classList.remove('animasi');
        berah = true;
    }

    e.preventDefault();
});