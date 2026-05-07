// Problem - 1 

function filterEvenNumbers(arr : number[]) : number[]{
   return arr.filter((ele) => (ele%2===0))
}
filterEvenNumbers([1, 2, 3, 9, 5, 6]);

// Problem - 2

function reverseString(str : string) : string{
    const size : number = str.length-1;
    let result : string = "";
    for(let i=0;i<=size;i++){
          result+=str[size-i];
    }
    return result;
}
reverseString("hello");

// Problem - 3

type StringOrNumber = string | number;

const checkType = (input : StringOrNumber) : string =>{
    if(typeof input === 'string'){
        return 'String';
    }
    return 'Number';
}
checkType('45');

// Problem - 4

const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T,P extends keyof T> (userProperty : T ,property : P): T[P]=>{
    return userProperty[property];
}

getProperty(user, "id");

// Problem - 5

interface Book {
  title: string,
  author: string,
  publishedYear: number,
}

const toggleReadStatus =(book: Book): Book & {isRead : boolean}=>{
    return { ...book, 
        isRead : true 
    };
};

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

// Problem - 6

class Person {
    name : string;
    age : number;

    constructor(name : string, age : number ) {
        this.name = name;
        this.age = age;
    }
    
}

class Student extends Person{
    grade : string;
    constructor(name : string,age:number,grade : string){
        super(name,age);
        this.grade = grade;
    }

    getDetails() : string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice", 25, "B");
student.getDetails();

// Problem - 7

function getIntersection(array1 : number[],array2 : number[]): number[]{
    return array1.filter((num)=> array2.includes(num));
}
getIntersection([7, 2, 3, 4, 5], [3, 4, 9, 6, 7]);

 
