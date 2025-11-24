class Person2 {
constructor(name) {
this.name = name;
}
showName() {
console.log(`Name: ${this.name}`);
}
}
class Student2 extends Person2 {
constructor(name, branch) {
super(name);
this.branch = branch;
}
showBranch() {
console.log(`Branch: ${this.branch}`);
}
}
const stu2 = new Student2("Reema", "CS");
stu2.showName();
stu2.showBranch();