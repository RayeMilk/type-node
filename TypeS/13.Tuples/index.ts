// array with a fixed number of elements [ จำกัดว่าประกาศใน array มีกี่ตัก็ใช้ได้เท่านั้น]

// ตัวอย่างของ tuples
let tuple1: [number, string] = [1, "Hello"]; // tuple ที่มี 2 ค่า: number และ string
let tuple2: [string, boolean, number] = ["TypeScript", true, 42]; // tuple ที่มี 3 ค่า: string, boolean, number

// การเข้าถึงค่าใน tuple
console.log(tuple1[0]); // 1
console.log(tuple1[1]); // "Hello"

// การเปลี่ยนแปลงค่าใน tuple
tuple1[0] = 2; // เปลี่ยนค่าแรก
tuple1[1] = "World"; // เปลี่ยนค่าที่สอง

// การใช้ tuple ในฟังก์ชัน
function getTuple(): [string, number] {
    return ["Age", 30];
}

let myTuple = getTuple();
console.log(myTuple); // ["Age", 30]

// การใช้ tuple ในอาร์เรย์
let arrayOfTuples: [string, number][] = [
    ["Alice", 25],
    ["Bob", 30],
    ["Charlie", 35]
];

// การวนลูปผ่านอาร์เรย์ของ tuples
for (let [name, age] of arrayOfTuples) {
    console.log(`${name} is ${age} years old.`);
}