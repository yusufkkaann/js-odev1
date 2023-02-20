let isim=prompt("Lütfen adınızı giriniz");
let myName= document.querySelector("#myName")
myName.innerHTML=`${isim}`

let myClock=document.querySelector("#myClock")

const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
const formattedDate = now.toLocaleString('tr-TR', options);

myClock.innerHTML=`${formattedDate}`