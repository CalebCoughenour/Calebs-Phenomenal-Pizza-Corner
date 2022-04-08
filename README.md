1. if no toppings added, return a plain cheese pizza
2. adding a topping returns that topping on a cheese pizza
3. adding multiple toppings to pizza returns those toppings on a cheese pizza
4. if no toppings are added, the base price stays the same
5. price will increment up based off how many toppings are added
6. user then will pick small, md, or large (small by default)
7. final price and pizza with toppings will be displayed


Describe: Pizza()

Test: "It should return a string with toppings"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"]);
Expected Output: newPizza {toppings: ["Pepperoni", "Olives"]}


Describe: addToppings()

Test: "It should add a topping to Pizza object toppings if it hasn't been added and will return true"
Code: let newPizza = new Pizza;
addToppings("Pepperoni");
Expected Output: newPizza {toppings: ["Pepperoni"]}
                  true


Test: "It should not add a topping to Pizza object toppings if it has been added and will return false"
Code: let newPizza = new Pizza;
addToppings("Pepperoni");
addToppings("Pepperoni");
Expected Output: newPizza {toppings: ["Pepperoni"]}
                  true
                  newPizza {toppings: ["Pepperoni"]}
                  false


Describe: removeToppings()

Test: "It should remove a entered topping if it is already added"
Code: let newPizza = new Pizza;
addToppings("Pepperoni", "Olives");
removeToppings("Pepperoni");
Expected Output: newPizza {toppings: ["Olives"]}