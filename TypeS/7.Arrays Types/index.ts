// ประกาศอาร์เรย์ของตัวเลข
const numbers: number[] = [1, 2, 3, 4];

// ประกาศอาร์เรย์ของสตริง
const fruits: Array<string> = ["apple", "banana", "cherry"];

const colors: string[] = ["red", "green", "blue"];
console.log(colors[0]); // "red"
colors[1] = "yellow"; // เปลี่ยนค่า "green" เป็น "yellow"

const items: string[] = [];

// เพิ่มค่า
items.push("hello");
items.push("world");

// ลบค่า
items.pop(); // ลบ "world"

// ใช้ forEach
numbers.forEach(num => {
    console.log(num);
});

// ใช้ map
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let tuple: [string, number] = ["hello", 10];

function logArray<T>(arr: T[]): void {
    arr.forEach(item => console.log(item));
}

logArray<number>([1, 2, 3]);
logArray<string>(["a", "b", "c"]);

// อาร์เรย์ใน TypeScript เป็นเครื่องมือที่มีประสิทธิภาพในการจัดการข้อมูลที่มีลักษณะคล้ายกัน คุณสามารถใช้ฟีเจอร์ต่าง ๆ เช่น การประกาศ การเข้าถึง การเพิ่มและลบค่า รวมถึงการวนลูปเพื่อทำงานกับอาร์เรย์ได้อย่างมีประสิทธิภาพ