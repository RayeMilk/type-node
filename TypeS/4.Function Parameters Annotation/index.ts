// Regular function

function addone(num: number) { // num : number คือ annotation ของ parameter ถ้าเปลี่ยนเป็น string ก็จะมี error
    return num + 1;
}

const addthree = addone(3);
console.log(addthree);
