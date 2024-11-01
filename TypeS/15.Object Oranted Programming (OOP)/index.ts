class Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const man = new Human("John", 20);
console.log(man);

// Access Modifiers
// public, private, protected

    // Start of Selection
    class Person {
        public name: string;
        private age: number;
        protected address: string;
    
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
    
        public greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
    
        public getAge() {
            return this.age;
        }
    
        protected getAddress() {
            return this.address;
        }
    }
    
    const persons = new Person("Alice", 30, "123 Main St");
    console.log(persons.name); // สามารถเข้าถึงได้ทุกที่
    // console.log(person.age); // ไม่สามารถเข้าถึงได้ (private)
    // console.log(person.address); // ไม่สามารถเข้าถึงได้ (protected)
    //person.greet();
    
    class Employee extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    
        public getEmployeeAddress() {
            return this.getAddress(); // สามารถเข้าถึงได้ภายใน class ย่อย
        }
        
        public getEmployeeAge() {
            return this.getAge();
        }
    }
