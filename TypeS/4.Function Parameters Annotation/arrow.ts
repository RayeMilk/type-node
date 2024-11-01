//Arrow function

const double = (x: number, y: number) => x * y // ทุกๆ parameter จะกำหนด type เป็น any โดยอัตโนมัติ
const res = double(10, 20);
console.log(res);

// ความพิเศษ ในกรณีที่เพิ่ม parameters เข้าไปจะส่งเป็น error ออกมาเพราะเรากำหนดไว้แค่ 2 ตัวเท่านั้น

const double2 = (x: number, y: number) => x * y;
// const res2 = double2(10, 20, 30); // <-- จะส่ง error ออกมาเพราะเรากำหนดไว้แค่ 2 ตัวเท่านั้น
// console.log(res2);
