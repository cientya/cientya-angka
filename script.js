alert("GAME TEBAK ANGKA \n pilih angka 1-10 \n kamu punya 3 kesempatan");

const angkaBenar = Math.floor(Math.random() * 10) + 1;
 
for (let nyawa = 3; nyawa >= 1; nyawa--) {
const tebakanUser = prompt("Masukan tebakan angka");

if (tebakanUser == angkaBenar) {
    alert(`Tebakan anda benar!! \n Angka yang benar adalah ${angkaBenar}`);
    break;
} else if (tebakanUser > angkaBenar) {
    alert(`WETT ketinggian bang \n Anda masih punya ${nyawa - 1} kesempatan`);
} else if (tebakanUser < angkaBenar) {
    alert(`Tambah lagi dongs \n Anda masih punya ${nyawa - 1} kesempatan`);
}

if (nyawa == 1) {
    alert(`Anda Gagal HAHAHAHAH \n Angka yang benar adalah ${angkaBenar}`);
    }
}
