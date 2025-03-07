function pasanganTerbesar(num) {
  // you can only write your code here!

  let input = num.toString();
  let pasangan = input[0] + input[1];
  let banding = '';

  for (let i = 0; i < input.length; i++) {
    banding = input[i] + input[i+1];
    if (Number(banding) > Number(pasangan)) {
      pasangan = banding;
    }
  }

  return pasangan;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

//   TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop