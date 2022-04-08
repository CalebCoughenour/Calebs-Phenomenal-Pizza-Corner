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
Code: let newPizza = new Pizza("Pepperoni", "Small");
Expected Output: newPizza {toppings: undefined, size: undefined, price: 0}



















<!-- **Describe: addTopping()**

Test: "It should add a topping to Pizza object toppings if it hasn't been added and will return true"
Code: let newPizza = new Pizza;
addToppings("Pepperoni");
Expected Output: newPizza {toppings: "Pepperoni"}
                  true

Test: "It should not add a topping to Pizza object toppings if it has been added and will return false"
Code: let newPizza = new Pizza;
addToppings("Pepperoni");
addToppings("Pepperoni");
Expected Output: newPizza {toppings: {"Pepperoni"}, size: {}}
                  true
                  newPizza {toppings: {"Pepperoni"}, size: {}}
                  false

Test: "It should not add multiple toppings if they are entered"
Code: let newPizza = new Pizza;
addToppings("Pepperoni", "Olives");
Expected Output: newPizza {toppings: "Pepperoni", size: {}}



**Describe: removeTopping()**

Test: "It should remove a entered topping if it is already added and return true"
Code: let newPizza = new Pizza;
addToppings("Pepperoni", "Olives");
removeToppings("Pepperoni");
Expected Output: newPizza {toppings: "Olives", size: {}}

Test: "It should not remove a topping if it's not been added yet and return false"
Code: let newPizza = new Pizza;
addToppings("Pepperoni");
removeToppings("Olives");
Expected Output: false
                newPizza {toppings: "Pepperoni", size: {}}



**Describe: sizePrice()**

Test: "It should set price to 8 if small is chosen"
Code: let newPizza = new Pizza;
newPizza.sizePrice("small") -->

<!-- **Describe: addSize()**

Test: "It should add a size to Pizza object if it hasn't been added and will return true"
Code: let newPizza = new Pizza;
addSize("small");
Expected Output: newPizza {toppings: {}, size: {"small"}}
                  true

Test: "It should not add a size to Pizza object toppings if it has been added and will return false"
Code: let newPizza = new Pizza;
addToppings("Medium");
addToppings("Medium");
Expected Output: newPizza {toppings: {}, size: {"Medium"}}
                  true
                  newPizza {toppings: {}, size: {"Medium"}}
                  false

Test: "It should replace the size that has been displayed if the size is switched"
Code let newPizza = new Pizza;
addSize("Small");
addSize("Medium");
Expected Output: newPizza {toppings: {}, size: {"Medium"}} -->



<!-- **Describe: removeSize()**

Test: "It should remove entered size if it is already added and return true"
Code: let -->



<!-- **Describe: Topping(topping)**

Test: "It should return a string with input"
Code: let newTopping = new Topping("pepperoni");
Expected Output: newTopping("pepperoni") -->