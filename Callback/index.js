/*console.log("เริ่มดาวโหลด");
setTimeout(()=>{
    console.log("กำลังดาวโหลด")
},3000)
console.log("จบการทำงาน");*/



// ทบทวน callblack Functions

function calculate (x,y,callblack) {
    console.log("กำลังคำนวณ....")
    setTimeout(() =>{
        const sum = x+y;
        callblack(sum);
    },4000)
}


function display (result) {
    console.log(`ผลบวก = ${result}`)
} 
// ฟังชันแบบ callback function
/*const sum  = calculate (100, 450)
display(sum);*/

calculate(100,450,display)