// อันด้านบนคือเอามาต่อกัน อันนี้คือรวมแม่ง ของที่อยู่ในtype จะมารวมกันเลย

let password : string | number = 20  // กำหนดให้ตัวแปรใช้ได้ 2 type

type UserIn = {
    first: string;
    second: number;
    age: number
}

type AccountDetails = {
    email: string;
    password: number;
}

let User: UserIn | AccountDetails = {first: "John", second: 20, age: 20, email: "john@gmail.com", password: 123456};

const citems: (number | string)[] = [1,5,5, "hello"];
console.log(User);