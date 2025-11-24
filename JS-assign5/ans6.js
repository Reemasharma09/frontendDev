function PersonX(name) {
this.name = name;
}
PersonX.prototype.sayHello = function() {
console.log(`Hello, I am ${this.name}`);
};
function Faculty(name, dept) {
PersonX.call(this, name);
this.dept = dept;
}
Faculty.prototype = Object.create(PersonX.prototype);
Faculty.prototype.showDept = function() {
console.log(`Department: ${this.dept}`);
};
function Professor(name, dept, subject) {
Faculty.call(this, name, dept);
this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.showSubject = function() {
console.log(`Subject: ${this.subject}`);
};
const prof = new Professor("Dr. Sharma", "CS", "AI");
prof.sayHello();
prof.showDept();
prof.showSubject();