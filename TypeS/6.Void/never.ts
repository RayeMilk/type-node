// never return anything

function throwError(msg: string): never {
    throw new Error(msg);
}

function infiniteLoop(): never {
    while (true) {}
}

let x: never;

function neverReturn(): never {
    while (true) {
       
    }
}

x = neverReturn();
