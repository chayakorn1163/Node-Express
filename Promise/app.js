/*const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777*/

// สร้าง promise
const consnect = true;
const url1 = "chayakon/files.json";
const url2 = "chayakon/files.json";
   /* function downloading(url) {
        return new Promise(function (resolve, reject) {
            console.log(`กำลังดาวโหลด ${url}`)
            setTimeout(() => {
            if (consnect) {
                resolve(`ดาวโหลด ${url} เรียบร้อย`);
            } else {
                reject(`เกิดข้อผิดพลาด`);
            }
            }, 5000);
        });
        }

downloading(url1).then(function(result){
    console.log(result);
    downloading(url2).then(function(result){
        console.log(result);
    })
})*/



