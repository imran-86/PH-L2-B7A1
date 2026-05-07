                                  Introduction  

Imagine you write the same function three times. Once for numbers, once for strings, once for objects. That is a lot of repeated code.Generics solve this problem. With Generics, you write a function once and it works with any type , while staying fully type-safe.

                           The Problem Without Generics  

 Using `any` : there is no type safety
function getFirst(arr: any[]): any {
  return arr[0];
}

const first = getFirst([1, 2, 3]);
first.toUpperCase();  // No error here but crashes at runtime.

//  Using Generics : make sure safe and reusable
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
const num = getFirst([1, 2, 3]);        // num: number
const str = getFirst(["a", "b", "c"]); // str: string

num.toUpperCase(); // Compile error! TypeScript knows it's a number
str.toUpperCase(); // Works fine

Here :

  <T> is a type placeholder. When we call the function,TypeScript figures out what T is automatically.

                                         Conclusion  
                                      
Generics are one of the most powerful features in TypeScript. They ensures:

 => Write reusable functions, classes, and interfaces
 => Keep full type safety — no more any
 => Catch bugs at compile time, not runtime

As a backend engineer, Generics will save us from writing the same code over and over.
