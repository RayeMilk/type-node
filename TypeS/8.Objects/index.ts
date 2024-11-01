interface Person {
    firstName: string;
    lastName: string;
    ages: number;
}


type PersonType = {
    firstName: string;
    lastName: string;
    age: number;
};

interface Personv {
    firstName: string;
    lastName: string;
    age?: number; // อายุเป็นคุณสมบัติที่ไม่จำเป็น
}

interface Person {
    readonly id: number;
    firstName: string;
    lastName: string;
}

const scores: Record<string, number> = {
    Alice: 90,
    Bob: 85
};