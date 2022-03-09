// function Person(name, age) {

//     this.name = name;
//     this.age = age;
// }
// function Customer(name, age, id) {
//     Person.call(this, name, age);

//     this.id = id;
// }
// Customer.prototype = new Person()
// var John = new Customer("John", 21, 4567);
// console.log(John);

class Person
{
    constructor(name,age)
    {
        this.age=age;
        this.name=name;
    }
}
John=new Person("John",12)
console.log(John)