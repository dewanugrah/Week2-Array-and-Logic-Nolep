// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    // Menambahkan "Elsharawy" dan "Provinsi"
    input.splice(1, 2, `${input[1]}Elsharawy`, `Provinsi ${input[2]}`);
    
    // Menambahkan "Pria" dan "SMA Internasional Metro"
    input.splice(4, 1, "Pria", "SMA Internasional Metro");

    console.log(input);

    // Memisahkan tanggal
    let tanggal = input[3].split('/'); // Memisahkan tanggal menggunakan (/)
    tanggal.splice(1,0,"Mei"); // Menambah item "Mei"
    tanggal.splice(2,1) // Menghapus item "05"
    console.log(tanggal[1]); // Bulan
    
    console.log(tanggal.reverse()); //Membalikkan item tanggal

    // Menggabungkan kembali tanggal
    tanggal.reverse() // Membalikkan kembali item tanggal
    tanggal.splice(1,0,"05")
    tanggal.splice(2,1);
    let tanggalGabung = tanggal.join('-');
    console.log(tanggalGabung);

    // Membatasi panjang nama
    let namaPendek = input[1].slice(0, 15);
    console.log(namaPendek);

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */