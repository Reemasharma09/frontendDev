class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        console.log(`${this.name} works in ${this.department}`);
    }
}
class Manager extends Employee {
    work() {
        console.log(`${this.name} manages the ${this.department} team`);
    }
}
const e = new Employee("Rahul", "Finance");
const m = new Manager("Sneha", "IT");
e.work(); 
m.work();   