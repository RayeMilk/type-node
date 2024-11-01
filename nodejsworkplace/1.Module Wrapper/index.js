// Module Wrapper

/*
    Module Wrapper คือโครงสร้างหรือฟังก์ชันที่ใช้ในการจัดการโมดูลในโปรแกรม 
    โดยเฉพาะใน JavaScript ซึ่งช่วยให้สามารถนำเข้าและส่งออกฟังก์ชันหรือค่าต่าง ๆ ระหว่างไฟล์ได้อย่างมีระเบียบ
     ตัวอย่างเช่น การใช้ export และ import ใน ES6 เพื่อสร้างโมดูลที่สามารถนำไปใช้ซ้ำได้ในหลาย ๆ ที่ในโปรแกรม
*/

/*(function (exports, require, module, __filename, __dirname) {
    console.log("Module Wrapper");
})() */

console.log(__filename);
console.log(__dirname);
