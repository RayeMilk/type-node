// generics clauses

class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent() : T {
        return this.content;
    }

    setContent(newContent: T) : void {
        this.content = newContent;
    }
}   

const stringBox = new Box<string>("Hello world");
console.log(stringBox.getContent());
stringBox.setContent("Hello world again");
console.log(stringBox.getContent());
