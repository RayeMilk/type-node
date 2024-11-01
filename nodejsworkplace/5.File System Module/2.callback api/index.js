import * as fs from 'fs';

// สร้างโฟลเดอร์แบบ callback version
/* fs.mkdir("C:\\nodejs", (err) => {
    if (err) throw err;
    console.log("Directory created successfully");
})
*/

fs.mkdir("c:\\nodejs", function (err) {
    if (err) throw err;
    console.log("Directory created successfully");
})





/*
โฟลเดอร์นี้ใช้สำหรับการจัดการไฟล์โดยใช้ API แบบ callback 
ซึ่งเป็นวิธีการที่เก่ากว่าในการจัดการกับการทำงานที่เป็นแบบอะซิงโครนัส 
โดยจะต้องส่งฟังก์ชัน callback ไปยังฟังก์ชันที่ทำงาน
*/
