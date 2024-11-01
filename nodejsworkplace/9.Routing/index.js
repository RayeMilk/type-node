import http from "http";

const server = http.createServer((req,res) => {
    if ( req.url === "/") {
        res.end("<h1>Home Page</h1>");
    } else if ( req.url === "/about") {
        res.end("<h1>About Page</h1>");
    } else {
        res.end("<h1>404 Not Found</h1>");
    }
})

server.listen(3000, () => console.log("Server is running on port 3000"));


/*
Routing คือกระบวนการที่ใช้ในการกำหนดเส้นทาง (path) หรือ URL 
ที่ผู้ใช้เข้าถึงในแอปพลิเคชันเว็บ โดยเฉพาะในเว็บเซิร์ฟเวอร์หรือเฟรมเวิร์กที่ใช้ในการพัฒนาเว็บ เช่น Express.js ใน Node.js
การทำ Routing จะช่วยให้สามารถจัดการกับคำขอ (request) ที่เข้ามาจากผู้ใช้ได้อย่างมีระเบียบ โดยสามารถกำหนดว่าเมื่อผู้ใช้เข้าถึง
 URL ใด จะให้แสดงผลหรือทำงานอะไร เช่น การแสดงหน้าเว็บ การส่งข้อมูล หรือการประมวลผลข้อมูล
*/
