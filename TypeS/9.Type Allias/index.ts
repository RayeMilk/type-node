// allows you to define a custom type that refers to another type

type User = {
    name: string;
    age: number;
    location: string;
}

const printUserinfo = (user: User) => {
    return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
}

printUserinfo({name: "John", age: 20, location: "Bangkok"});

// Optional Properties ( มีเอาไว้ใช้หรือไม่ก็ได้ เพราะปกติ type เรียกแล้วต้องใช้ไง)

type OP = {
    names: string;
    readonly ages: number;
    whereareyou?: string;
}

const user: OP = {names: "John", ages: 20, whereareyou: "Bangkok"};
console.log(user);
