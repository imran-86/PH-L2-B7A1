

function filterEvenNumbers(arr : number[]) : number[]{
   return arr.filter((ele) => (ele%2===0))
}




function reverseString(str : string) : string{
    const size : number = str.length-1;
    let result : string = "";
    for(let i=0;i<=size;i++){
          result+=str[size-i];
    }
    return result;
}



type StringOrNumber = string | number;

const checkType = (input : StringOrNumber) : string =>{
    if(typeof input === 'string'){
        return 'String';
    }
    return 'Number';
}





const getProperty = <T,P extends keyof T> (userProperty : T ,property : P): T[P]=>{
    return userProperty[property];
}





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





function getIntersection(array1 : number[],array2 : number[]): number[]{
    return array1.filter((num)=> array2.includes(num));
}


 
