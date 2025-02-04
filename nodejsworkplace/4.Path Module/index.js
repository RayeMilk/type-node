import path from "path";

//path = ช่องทาง basename ที่ตั้งต้น

console.log(path.basename("c:\\nodejs\\app.html")); // ที่อยู่ไฟลพร้อมชื่อ
console.log(path.basename(""))

console.log(path.dirname("c:\\nodejs\\app.html")); // ที่อยู่ไฟล์
console.log(path.extname("c:\\nodejs\\app.html")); // ไฟล์ด้านหลัง .

/*
 ใช้สำหรับรวมเส้นทาง (path) ของไฟล์หรือโฟลเดอร์ในระบบไฟล์ให้เป็นเส้นทางที่ถูกต้อง 
 โดยจะจัดการกับการเพิ่มหรือกำจัดเครื่องหมาย / หรือ \ ที่ไม่จำเป็น เพื่อให้ได้เส้นทางที่ถูกต้องตามระบบปฏิบัติการที่ใช้งานอยู่
 */

console.log(path.join("c:\\nodejs\\app.html")); // รวมที่อยู่ไฟล์กับชื่อไฟล์

/*
    path.normalize() ใช้สำหรับปรับปรุงเส้นทาง (path) 
    ของไฟล์หรือโฟลเดอร์ให้เป็นรูปแบบที่ถูกต้อง โดยจะจัดการกับเครื่องหมาย `/` หรือ `\`
     ที่ไม่จำเป็น รวมถึงการลบส่วนที่ซ้ำซ้อนหรือไม่ถูกต้องในเส้นทาง เช่น `..` หรือ `.`
*/
console.log(path.normalize("c:\\nodejs\\app.html")); // ปรับปรุงที่อยู่ไฟล์

/*
    path.parse ใช้สำหรับแยกที่อยู่ไฟล์ (file path) 
    ออกเป็นส่วนประกอบต่าง ๆ เช่น root, dir, base, ext,
    และ name ซึ่งช่วยให้คุณสามารถเข้าถึงข้อมูลเฉพาะเกี่ยวกับเส้นทางไฟล์ได้ง่ายขึ้น 
*/
console.log(path.parse("c:\\nodejs\\app.html")); // แยกที่อยู่ไฟล์กับชื่อไฟล์
