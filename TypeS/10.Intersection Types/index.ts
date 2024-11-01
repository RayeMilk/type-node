// การเอา type มาต่อกัน

type one = {
    first: string;
    second: boolean;
}

type two = {
    third: number;
}

type three = one & two;

const result: three = {first: "Hello", second: true, third: 123};
console.log(result);