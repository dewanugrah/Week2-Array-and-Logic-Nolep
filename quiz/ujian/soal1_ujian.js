/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], 
maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!

  let posisiSekarang = 0; // Inisialisasi posisi saat ini
  let foundX = false; // Menandakan apakah 'x' sudah ditemukan

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      posisiSekarang = 0; // Reset posisi saat ini ke 0 jika menemukan 'o'
    } else if (arr[i] === 'x') {
      foundX = true; // Tandai bahwa 'x' sudah ditemukan
      posisiSekarang++;
      break; // Hentikan loop setelah menemukan 'x'
    } else {
      posisiSekarang++; // Tambah posisi saat ini jika bukan 'o' atau 'x'
    }
  }

  if (!foundX) {
    posisiSekarang = 0;
  }

  return posisiSekarang;
}

// let arr = [' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'];

// let posisiO = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 'o') {
//     posisiO = i;
//   } else if (arr[i] === 'x' && posisiO != -1) {
//     let posisi = Math.abs(posisiO - i);
//     if (posisi < jarak) {
//       jarak = posisi;
//     }
//   }
// }

// console.log(posisiO);
// console.log(jarak);

// let arr = [' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'];

// console.log("Posisi Sekarang:", posisiSekarang); // Ini akan mengembalikan posisi saat ini
// console.log("Apakah 'x' ditemukan?", foundX); // Ini akan mengembalikan true jika 'x' ditemukan

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1






