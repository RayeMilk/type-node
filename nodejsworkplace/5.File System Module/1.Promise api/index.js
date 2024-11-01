import * as fs from "fs/promises";

// Creating Director / Folder // Searching Directory

/*try {
    const files = await  fs.readdir('c:\\nodejs')
    for (const file of files){ // ดูว่าในfolder มันมีอะไรบ้าง
        console.log(file);
    }
    console.log("Directory search successfully");
} catch (error) {
    console.log(error);
}
*/

// Remove directory

/*try {
    await  fs.rmdir('c:\\nodejs')
    console.log("Directory Remove successfully"); // if want to delete a not empty direcotry we will fs.rm not fs.rmdir
} catch (error) {
    console.log(error);
}
*/

//Create and write files

/* try {
    await fs.writeFile('gay.md', 'Hello World')
    console.log("File created and written successfully");
} catch (error) {
    console.log(error);
}
*/

// สร้างเสร็จก็ไปอ่านไฟล์กันเลยดีกว่า Read file

try {
    const data = await fs.readFile('gay.md', 'utf-8')
    console.log(data);
} catch ( erorr ) {
    console.log(erorr);
}

// appeend ( เพิ่มข้อมูลไปยังไฟล์ที่มีอยู่ )

try {
    await fs.appendFile('gay.md', 'You are gay')
} catch ( erorr ) {
    console.log(erorr);
}

// Copy file ( ก็ตามชื่อ )

 /*try {
    await fs.copyFile('gay.md', 'you are gay.md')
    console.log("File copied successfully");
} catch (erorr){
    console.log(erorr);
}
    */

// ดูข้อมูลด้านใน

/*
try {
    const info  =await fs.stat('gay.md')
    console.log(info.isFile);
} catch (error ){
    console.log(error);
}

*/


/*
 โฟลเดอร์นี้ใช้สำหรับการจัดการไฟล์โดยใช้ API แบบ Promise
 ซึ่งช่วยให้การเขียนโค้ดมีความสะดวกและอ่านง่ายขึ้น โดยใช้ async/await 
 ในการจัดการกับการทำงานที่เป็นแบบอะซิงโครนัส
*/