//Part 1: Employee Data 

//Challenge:

//1. Design a type alias named Employee to represent an employee object with properties like 
//name (string), department (string), and role (string). 

//2. Include an optional nested object named contact to hold phone and email information (if 
//provided). 

//3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
//"Intern". 

//4. Make the skills property an optional array of strings for listing an employee's skills (if 
//any).
console.log("\n \t \t Part 1: Employee Data \t");

type Employee={
    name: string;
    Department: string;
    role: string,
    contact? : {

      phone: number;
      email: number | string;
    };
    skills? :string[],
};

type Role = "Manager"|"Engineer"|"intern"|"Student";

let employee : Employee = {

    name: "Iqra Khan",
    Department: "GIAIC department",
    role: "Student",
    contact: {
        phone: 987654321,
        email: "iqrakhan19@gmail.com"
    },
    skills: ["Intermediate","HTML","CSS",]
};

console.log(employee);



//Part 2: Car Details 
//Challenge: 
//1. Design a type alias named Car to represent a car object. 
//2. Include a nested object named engine within Car, containing a property named 
//horsepower (number). 
//3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
//engine's horsepower.
console.log("\n \t \t Part 2: Car Details \t");

 type Car= {
     name: string,
     model: string | number,
     year: number,
     color: string,
     engine: {

        horsePower : number,
     };
     getHorsepower :() => any ;

 };

  let Personal_Car: Car ={
    
    name:"Mercedes-Benz C-class",
    model: "S560",
    year: 2021,
    color: "Black",
    engine: {
        horsePower : 258,

    },
    getHorsepower : () => {
        console.log(`${Personal_Car.name} car speed in ${Personal_Car. engine.horsePower}`);

    }

 };
 Personal_Car.getHorsepower();

 console.log(Personal_Car);

//Part 3: Colorful T-Shirts 
//Challenge: 
//1. Design a type alias named Product to represent a T-shirt object with properties like name 
//(string), price (number), and color (string). 
//2. Include a nested object named inventory within Product. This inventory object 
//should have two properties:  
//o stock (number): Represents the number of T-shirts available. 
//o colorOptions (optional array of strings): Lists available colors (if any). 
//3. Inside the inventory object, define a function named changeColor. This function 
//accepts a new color string as an argument. When called, it should:  
//o Update the color property of the Product object. 
//o Adjust the price based on the new color (implement your own logic, e.g., 
//increase by 10% for red, decrease by 5% for blue).
console.log("\n \t \t Part 3: ColourFul T-Shirts \t");

type Product ={
    name: string;
    price: number;
    color: string;
     inventory:{

        stock: number;
        colorOptions?: string[],
        changeColour:(newColour:string) => void

     };
}
let shirt : Product = {
    name : " leopart T_shirt",
    price: 6000,
    color: "Yellow",
    inventory: {
        stock: 1000,
        colorOptions: ["red","blue", "white"],
        changeColour:(newColor: string) => {

            shirt.color = newColor;
            shirt.price = 700;
            switch(newColor){
                case "red":
                    shirt.price *=1.1;

                    break;
                    case "blue":
                        shirt.price *=0.95

                        break;
                        default:
                            break;

            };

        },
    },


};
console.log(shirt);
shirt.inventory.changeColour("red");

console.log("\n\t For Red Colour T-shirt price increase by 10% ,Shirt.");
shirt.inventory.changeColour("Blue");

console.log("\n\t For Blue Clour T-Shirt price decrease by 5%, Shirt.");





