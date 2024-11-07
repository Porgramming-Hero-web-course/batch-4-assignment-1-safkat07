# The significance of union and intersection types in Typescript.

Typescript is superset of our very popular Javascript. In past time we used to create web apps using Javascript. but in modern world, it is more complex to handle millions of data. we often struggle with Javascript to check the type of data and handle the way it should be. Here comes our ultimate savior Mr.Typescript. The type checker guy. Typescript offers tools that take our familiar Javascript to the next level. Among them, Union and Intersection types stands out as essential concepts that add flexibility and control to how we work with types in Typescript.

## What are Union Types??

Union types allow a variable to hold more than one type. we use | to use the union type. in simple term it's says, either this type or this type, otherwise no types. For example:

```typescript
let carModel: string | number;
carModel = "Toyota T30";
carModel = 333; 
```
In this example we can clearly see that , in the carModel variable we can store either string type data or number type data. We can not use here boolean, array or any others types of data.

## Why are union Types Usefull?

Union types maker our code more flexible and adaptable. Suppose we are working with a function that accepts a parameter that could be a string or a number. Using a union type, we can handle both the cases with a single function. We dont need to write two funciotn for the same logic. It makes our code DRY(Do not repeat yourself).


```typescript
function printUserId(id: string | number) {
    console.log(`User ID is: ${id}`);
}

printUserId(123);      // Works with a number
printUserId("ABC123"); // Works with a string
```

With union types, we can avoid creating separate functions or complex checks, making the code easier to write and maintain.


## What are Intersection Types??

Intersection types allow a variable to require multiple types simultaneously, meaning the variable must satisfy the requirements of each type. Intersection types are declared with the & (ampersand) symbol, indicating "type A and type B."


```typescript
interface Car {
    model: string;
}

interface Electric {
    horsePower: number;
}

type ElectricCar = Car & Electric;

const myCar: ElectricCar = {
    model: "Tesla Model 3",
    horsePower: 350
};
```

In this example we must ensure that type ElectricCar should have both Car and Electric type property.


## Why are Intersection Types Useful?

Intersection types are useful when we need an object that combines multiple sets of properties, ensuring the object meets all necessary requirements.

## Union vs. Intersection: Key Differences
&#9675; Union Types (|): Either one type or another. Use union types when a value could be one of several types.
<br>
&#9675; Intersection Types (&): Combines multiple types. Use intersection types when a value must meet multiple type requirements.

## Conclusion

Union and Intersection types in TypeScript provide powerful ways to manage complex data types, adding flexibility and control to our code. By mastering these concepts, we can write more robust, adaptable, and type-safe applications.