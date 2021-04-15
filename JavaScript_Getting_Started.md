- We can use Electron to create Mac & Windows desktop apps

### Variables
- We use *let* to declare variables and *const* to declare constants. We used to declare variables using *var* keyword.
 - Problem with *var*
    - variables can be used before their declaration but it may resolve to *undefined*. This creates problems

- *let* and *const* initialises variable with block level scope whereas *var* has somewhat global

### Data types 

- Numbers 
    - Unlike other programming language, there is no specification of Integer, Float or double.
    - By default,JS works with Float
        - Example 
            - 
            ```
            let price = 12;
            let price = 12.14;
            ```
- null and undefined
    - undefined basically mean variable is not initialized. JavaScript will set value to *undefined* for uninitialized variable whereas Programmer generally sets variable to *null*. We can set to *undefined* as well but it provides distinction


### Truthy and Falsy

- Falsy
    - false
    - 0
    - "" or ''
    - null
    - undefined
    - NaN

-Truthy
    - Everthing NOT falsy
    - true
    - >0
    - "0"

### Just JS thing
- ```1.1 + 1.3 !== 2.4``` is true because JS uses inaccurate floating point number  

### Comparing === and ==

- ``` 1 === '1'``` results in false since datatype are different but however in the below case it is true
``` 1 == '1'```
JS attempts to convert first type into string

### Functions

- Ways of decalring a function in JS
    - 1. 
        ``` 
        function something() {
            //code
        }
        ```
    - 2. 
        ```
        let myValue = function() {
        }

        let myValue = function logMessage() {

        }

        myValue() //calls the function
        logMessage() // will give us error
        ```



### Objects
- Symbol can be used inside an object to hide information
```
let mySymbol = Symbol();

let person = {
    name : "Vaibhav",
    [mySymbol] : 'secretInformation'
};

```

- We can have function as Object method
```
let person = {
    name : "Vaibhav",
    showInfo:  function() {
        showMessage(this.name)
    }
};

```

- Same as Java where when we use object we change the reference so it reflects even outside the methods. Same goes for JS Object
**Object are passed by reference**


### Array

- Array can be initialized in 2-ways 
    -   ```let something = []```
    -   ```let something = Array.of(1,2,3)```
- Array is not a datatype but an object 
- Methods of Array 
    - push
    - pop
    - shift & unshift
    - slice, used to delete elements from array
    - splice, can be used for deletion and insertion as well

- Filter(), can be used for searching purposes and it returns Array


### Scope & Hoisting

- Global Scope
    - all the .js files in src are part of the global scope
    - Too many variable in the global scope can cause bugs

- Function Scope
    - Variable defined in the function scope can not be used outside of it

- *var* & Hoisting
    - Example of Hoisting. Lets us access the variable before its initialization
    ```
    productId = 456;
    console.log(productId); // prints 456
    var productId = 123;
    ```
    - Hoisting is fine with the functions
    ```
    showProduct();

    function showProduct() {
        console.log("A");
    }
    ```
    - Concept of Hoisting 
        - Javascript file gets executed in two passes and in the first pass JS engine will know there's function called *showProduct* but in the second pass it will execute the file in top down manner

- Hoisting can be avoided by using *let* and *const* 

### Undeclared Variables and Strict Mode

- We need not declare the variable in order to use it. We can directy use the same.

- `'use strict'`
    - Puts JS file in the strict mode and this forces you to declare the variable

### Switch Case
- Default case can be placed anywhere in the switch block
- If *break* not there in one of the case then it will go on till the next case
- Switch does a strict comparison
    - Type and value must match

- By wrapping a block of code in bracesm any variable declared within that block is only visible within the block, and is released once the block ends.


### For/in and For/of
- For/in 
    - Iterates over elements of object (properties and methods)
    - Example - for(const key in product)

- For/of 
    - Iterates over values in array, string etc.
    - Example - for(const item of _product)
    - Example - for(const char of productName)

- Label in JS
    - Label is any name you want followed by a colon
    - Not recommended
    - Example
        ```
        function labelSample(){
            even:
            for(let index = 1; index <= 10; index++){
                if(index % 2 == 1) {
                    continue even;
                }
                console.log(index);
            }
        }
        ```

- we can delete variable and function in JS

### Short Circuiting 

- &&, if one first one is false then it wont execute next part
- ||, if first one is true then it wont execute the other side

### Object Data Type / Constructor

- All object data types inherit from Object (not primitive)
- Object has constructor property, which returns a reference to the object itself

- Object literals and primitives are cast to objects for display


### this
- *this* in the global scope refers to *window* object, but in the case of `'use strict'` it will throw an error saying *this* is undefined.

- call() and apply()
    - call takes parameter to set it to this / what is passed to call()/apply() methods becomes 'this'


### Spread opeartor  
-
```
function stringToArray() {
    let productNumber = "ABCDEF";
    let values = [...productNumber] //has character array
}
```

- Shallow copy on Object Literal