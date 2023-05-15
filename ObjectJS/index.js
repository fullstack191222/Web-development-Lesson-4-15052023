const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    // fullName: function () {
    //     return this.firstName + " " + this.lastName;
    // }
};

///creating class
class Dog { //start of class
    constructor(name,age,race) {
        this.name = name;
        this.age= age;
        this.race = race;
    }
} // end of class


const d1 = new Dog("doggy", 3, "golden")




const printObject = (object) => {
    for (let key in object) {   // key = firstName,, key =lastName, key = age 
        console.log(key + " :" + object[key]);
    }
}

printObject(person)


// const printAll = function (obj) {

//     let text = "";
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             text += obj[key];
//             text += " "

//         }
//     }

//     console.log(text);
// }


// printAll(person)


