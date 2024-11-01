import http from "http";

// สร้าง server
const server = http.createServer((req, res) => {
    //console.log(req);
    //res.setHeader("Content-Type", "text/html");
    //res.statusCode = 200;
    //res.statusMessage = "VERY BAD ( JOKE )";
    
    // shorthand for status code and status message
    res.writeHead(200, "VERY BAD ( JOKE )", { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1>"); // แสดงผลข้อความ html <h1>

});

// เริ่มต้น server ที่ port 3000
server.listen(3000, () => console.log("Server is running on port 3000"));


