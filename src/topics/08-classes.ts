// export class Person {
//     public name: string;
//     private adrees?: string;

//     constructor(){
//         this.name = "Jesus",
//         this.adrees = "Soledad"
//     };
// };

export class Person {
    constructor(
        public name: string,
        private adrees: string) {};
};

const person1 = new Person("Jesus","Soledad")
const person2 = new Person("Cristian","Soledad")


console.log(person1, person2)