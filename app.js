const ism = prompt("Ismingizni kiriting");
const yosh = prompt("Yoshingizni kiriting");

const result = `Qadirli ${ism}. Siz ${2024 - yosh} yilda tugilgansiz. Va siz ${
  yosh * 12
}oy, ${((yosh * 12) / 7).toFixed} hafta, ${yosh * 365} kun, ${
  yosh * 365 * 24
} soat, ${yosh * 365 * 24 * 60} daqiqa, ${
  yosh * 365 * 24 * 60 * 60
} soniya yashagansiz 😉`;
alert(result);

const name = [daftar, qalam, iTD];
//  Bu yerda:
//  1.name - massiv nomi
//  2.[] - massiv tanasi
//  3.daftar, qalam - massiv elementlari

// const cars = [Audi, Volvo, BMW];
// const fruits = new Array(Banana, Apple, Peach);

const arr = new Array(2, 3);
//  massiv yaratildi, qiymati:[2,3]
arr = new Array(2);
// massivni [2] elementi aniqlandimi?
alert(arr[0]);
// yoq bizning massiv qiymati: [undefined, undefined]
