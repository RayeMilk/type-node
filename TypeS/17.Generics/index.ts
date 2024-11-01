// Regular function that not use a generics

// Function to print a string
const printString = (x: string) => console.log(x);
// Function to print a number
const printNUmber = (x: number) => console.log(x);
// Function to print a boolean
const printBoolean = (x: boolean) => console.log(x);

// Logging examples of each type
console.log(printString("Hello world"))
console.log(printBoolean(true))
console.log(printNUmber(20));

// Another example of a function that returns an array of two numbers
function printNumber(item: any, defaultValue: any): [number, number] {
    return [item, defaultValue];
} 

// Logging examples of the printNumber function with different types
console.log(printNumber(20, 10));
console.log(printNumber("Hello", "World"));
console.log(printNumber(true, false));

// Generic Function


// Start Generation Here

function uniqueDataTypesFunction<T>(item: T, defaultValue: T): [T, T]{
    return [item, defaultValue];
}

const nums = uniqueDataTypesFunction<number>(20, 10);
const strs = uniqueDataTypesFunction<string>("Hello", "World");
const bool = uniqueDataTypesFunction<boolean>(true, false);

console.log(nums);
console.log(strs);
console.log(bool);

// another example

interface Dogs {
    name: string;
    breed: string;
}

const dog1 = uniqueDataTypesFunction<Dogs>({name: "Rex", breed: "German Shepherd"}, {name: "Max", breed: "Golden Retriever"});
console.log(dog1);