type Employeeeeee = {
    id: number;
    name: string; 
}

type Manager = Employeeeeee & {
    department: string;
    role: string;
}

type MwithE = Manager & Employeeeeee;

const manager: MwithE = {
    id: 1,
    name: "John",
    department: "IT",
    role: "Manager"
}

console.log(manager);
