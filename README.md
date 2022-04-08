***********************************************************************************
**Specs**

1. if no toppings added and size is small, price will be $8
2. adding one topping to the pizza adds $1 to price
3. adding multiple toppings adds $1 for each topping
4. user then will pick small, md, or large
5. final price and pizza with toppings will be displayed


**TESTS**

**Describe: Pizza()**

Test: "It should not return topping and size when input is entered"
Code: let newPizza = new Pizza();
Expected Output: newPizza {toppings: undefined, size: undefined, price: 0}

Test: "It should return topping and size when input is entered"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium")
Expected Output: newPizza {(toppings: ["Pepperoni", "Olives"], size: "Medium", price: 0)}



**Describe: pizzaPriceAdjuster()**

Test: "It should receive the length of the toppings array"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium");
      newPizza.pizzaPriceAdjuster();
      console.log(toppingsAdjuster);
Expected Output: 2

Test: "The captured length should be 0 if theres no toppings added"
Code: let newPizza = new Pizza([], "Medium");
      newPizza.pizzaPriceAdjuster();
      console.log(toppingsAdjuster);
Expected Output: 0

Test: "It should check for size of pizza beginning with medium and change price to 8"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium");
      newPizza.pizzaPriceAdjuster();
      console.log(newPizza.price);
Expected Output: 8

Test: "It should check for size of pizza, if large change price to 10"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Large");
      newPizza.pizzaPriceAdjuster();
      console.log(newPizza.price);
Expected Output: 10


Test: "It should check for size of pizza, if x-large change price to 13"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "X-Large");
      newPizza.pizzaPriceAdjuster();
      console.log(newPizza.price);
Expected Output: 13

Test: "It should check for size of pizza, if small change price to 6"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Small");
      newPizza.pizzaPriceAdjuster();
      console.log(newPizza.price);
Expected Output: 6

Test: "It should add 1 to size price for each pizza topping"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium");
      newPizza.pizzaPriceAdjuster();
      console.log(newPizza.price);
Expected Output: 10

Test: "It should not add anything to sized price if no toppings are chose"
Code: let newPizza = new Pizza([], "Medium");
      newPizza.pizzaPriceAdjuster();
      console.log(newPizza.price);
Expected Output: 8

Test: "It should add 1 to size price for each pizza topping regardless of size and amount of toppings"
Code: let newPizza = new Pizza(["Pepperoni", "Olives", "Artichokes"], "Large");
      newPizza.pizzaPriceAdjuster();
      console.log(newPizza.price);
Expected Output: 13