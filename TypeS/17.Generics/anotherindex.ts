// object generics

function getRandomKey<T>(obj: {[key: string]: T}) : {
    key: string;
    value: T;
} {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return {key: randomKey, value: obj[randomKey]};
}

const bucketFruit = {a: 'apple', b: 'banana', c: 'cherry'};
const response1 = getRandomKey<string>(bucketFruit);
console.log(response1);

const numberFruit = {one: 1 , two: 2 , three: 3};
const randomMumb = getRandomKey<number>(numberFruit);
console.log(randomMumb);
