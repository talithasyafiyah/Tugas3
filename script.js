var bil1 = document.getElementById("bil1");
var bil2 = document.getElementById("bil2");
var hasil = document.getElementById("hasil");

function todo() {
    insert;
    insert2;
}

function tambah(){
    hasil.value = Number(bil1.value) + Number(bil2.value);
}

function kurang(){
    hasil.value = Number(bil1.value) - Number(bil2.value);
}

function kali(){
    hasil.value = Number(bil1.value) * Number(bil2.value);
}

function bagi(){
    hasil.value = Number(bil1.value) / Number(bil2.value);
}

function modulus(){
    hasil.value = Number(bil1.value) % Number(bil2.value);
}

function clean() {
    document.getElementById('bil1').value = "''";
    document.getElementById('bil2').value = "''";
    document.getElementById('hasil').value = "";
}

function insert(num) {
    document.form.bil1.value = document.form.bil1.value + num;
}

function insert2(num) {
    document.form.bil2.value = document.form.bil2.value + num;
}

function light() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}