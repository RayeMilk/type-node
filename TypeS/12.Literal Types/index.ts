// Literal types ใน TypeScript คือประเภทข้อมูลที่สามารถกำหนดค่าเฉพาะเจาะจงได้ ซึ่งหมายความว่าคุณสามารถกำหนดค่าที่แน่นอนให้กับตัวแปรได้ โดยไม่สามารถเปลี่ยนแปลงค่าเหล่านั้นได้ในภายหลัง


let color: 'red' | 'blue' | 'green'; // ประกาศแล้วก็ต้องประกาศซ้ำ

color = "red";

console.log(color);

// ตัวอย่างสำหรับ number

let age: 18 | 21 | 30; // ประกาศตัวแปร age ที่สามารถมีค่าเฉพาะ

age = 21; // กำหนดค่าให้กับ age

console.log(age);

// ตัวอย่างสำหรับ boolean

let isActive: true | false; // ประกาศตัวแปร isActive ที่สามารถมีค่าเฉพาะ
isActive = true; // กำหนดค่าให้กับ isActive


console.log(isActive);

// เป็นแบบนี้กับทุกตัว
