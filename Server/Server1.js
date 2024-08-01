const http = require("http"); // นำเข้าโมดูล http

// สร้างเซิร์ฟเวอร์ HTTP
http
  .createServer(function (request, response) {
    // your server code
    response.writeHead(200, { "Content-Type": "text/plain" }); // ตั้งค่าหัวข้อของการตอบกลับเป็น text/plain
    response.end("Hello, world!\n"); // ส่งข้อความ "Hello, world!" เป็นการตอบกลับ
  })
  .listen(process.env.PORT || 3000); // เซิร์ฟเวอร์จะรับฟังพอร์ตที่กำหนดในตัวแปรสภาพแวดล้อม PORT หรือพอร์ต 3000 หากไม่ได้กำหนด
