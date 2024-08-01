const url3 = "chayakon/find1.json";
const url1 = "chayakon/find2.json";
const url2 = "chayakon/find3.json";
const url4 = "chayakon/find4.json";
const url5 = "chayakon/find5.json";
const url6 = "chayakon/find6.json";
const url7 = "chayakon/find7.json";
const url8 = "chayakon/find8.json";


const urls = [url1, url2, url3, url4, url5, url6, url7, url8];

const consnect = true;
function downloading1(url) {
  return new Promise(function (resolve, reject) {
    console.log(`Download ${url} `);
    setTimeout(() => {
      if (consnect) {
        resolve(`download ${url} finished`);
      } else {
        reject(`error`);
      }
    }, 4000);
  });
}
/*downloading1(url3).then(function (result) {
  console.log(result);
  downloading1(url1).then(function (result) {
    console.log(result);
  });
});*/


// Async & Await
async function start() {
   console.log( await downloading1(urls))
   
   
}

start();


// API ภาพสินค้า (backend) => frontend (แสดงภาพในเว็บ)
// API (promise) => (padding) =>รอข้อมูลมาครบ (await) => แสดงภาพ
// loading.... => แสดงภาพ
