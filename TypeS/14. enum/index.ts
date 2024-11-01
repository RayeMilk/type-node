// 1. Numeric Enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// 2. String Enums
enum esponse {
    Yes = "YES",
    No = "NO",
    Maybe = "MAYBE"
}

// 3. Heterogeneous Enums
enum Mixed {
    No = 0,
    Yes = "YES"
}

// 4. Computed and Constant Members
const getValue = () => 42;

enum Computed {
    A = getValue(),
    B = "B",
    C = 3.14
}

// 5. Reverse Mapping
enum Color {
    Red,
    Green,
    Blue
}

// 6. Ambient Enums
declare enum Ambient {
    A,
    B,
    C
}

// การใช้งาน
let move: Direction = Direction.Up;
console.log(move); // 1

let answer: esponse = esponse.Yes;
console.log(answer); // "YES"

let response: Mixed = Mixed.Yes;
console.log(response); // "YES"

console.log(Computed.A); // 42

let colorName: string = Color[2];
console.log(colorName); // "Blue"

let ambientValue: Ambient = Ambient.A;
console.log(ambientValue); // 0