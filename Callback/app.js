const url1 = "frank.dev/files1.json";
const url2 = "frank.dev/files2.json";
const url3 = "frank.dev/files3.json";
const url4 = "frank.dev/files4.json";

function downloading(url, callback) {
  setTimeout(() => {
    console.log(`กำลังดาวน์โหลด ${url}`);
    callback(url);
  }, 3000);
}


function complete(result){

}

downloading(url1 , function(result) {
    console.log(`ดาวโหลดไฟล์ที่1 ${result} เรียบร้อย`)
    downloading(url2 , function(result){
        console.log(`ดาวโหลดไฟล์ที่2 {${result} เรียบร้อย`)
        downloading(url3 , function(result){
        console.log(`ดาวโหลดไฟล์ที่3 {${result} เรียบร้อย`)
        })
    })
    
})
