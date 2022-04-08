***********************************************************************************
**Specs**

1. if no toppings added, return a plain cheese pizza
2. adding a topping returns that topping on a pizza
3. adding multiple toppings to pizza returns those toppings on a pizza
4. if no toppings are added, the base price stays the same
5. price will increment up based off how many toppings are added
6. user then will pick small, md, or large (small by default)
7. final price and pizza with toppings will be displayed


**TESTS**

**Describe: Pizza()**

Test: "It should not return any input when input is entered"
Code: let newPizza = new Pizza("test");
Expected Output: newPizza {toppings: {}, size: {}}



**Describe: addTopping()**

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


**Describe: addSize()**

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



<!-- **Describe: removeSize()**

Test: "It should remove entered size if it is already added and return true"
Code: let -->



**Describe: Topping(topping)**

Test: "It should return a string with input"
Code: let newTopping = new Topping("pepperoni");
Expected Output: newTopping("pepperoni")



**Describe: Size(size)**

Test: "It should return a string with input"
Code: let sizedPizza = new Size("medium");
Expected Output: sizedPizza("medium")