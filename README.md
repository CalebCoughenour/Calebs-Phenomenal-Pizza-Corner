***********************************************************************************
**Specs**

1. if no toppings added and size is small, price will be $6
2. adding one topping to the pizza adds $1 to price
3. adding multiple toppings adds $1 for each topping
4. user will pick small($6), md($8), large($10) or x-large($13)
5. final price will be toppings + size cost
6. final price and pizza with toppings will be displayed


**TESTS**

**Describe: Pizza()**

Test: "It should not return topping and size when input is entered" <br>
Code: let newPizza = new Pizza(); <br>
Expected Output: newPizza {toppings: undefined, size: undefined, price: 0} <br>

Test: "It should return topping and size when input is entered" <br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium") <br>
Expected Output: newPizza {(toppings: ["Pepperoni", "Olives"], size: "Medium", price: 0)}<br>

<br>
<br>
<br>

**Describe: pizzaPriceAdjuster()**

Test: "It should receive the length of the toppings array"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium"); <br>
      newPizza.pizzaPriceAdjuster(); <br>
      console.log(toppingsAdjuster); <br>
Expected Output: 2<br>

Test: "The captured length should be 0 if theres no toppings added"<br>
Code: let newPizza = new Pizza([], "Medium");<br>
      newPizza.pizzaPriceAdjuster();<br>
      console.log(toppingsAdjuster);<br>
Expected Output: 0<br>

Test: "It should check for size of pizza beginning with medium and change price to 8"<br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium");<br>
      newPizza.pizzaPriceAdjuster();<br>
      console.log(newPizza.price);<br>
Expected Output: 8<br>

Test: "It should check for size of pizza, if large change price to 10"<br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Large");<br>
      newPizza.pizzaPriceAdjuster();<br>
      console.log(newPizza.price);<br>
Expected Output: 10<br>

Test: "It should check for size of pizza, if x-large change price to 13"<br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "X-Large");<br>
      newPizza.pizzaPriceAdjuster();<br>
      console.log(newPizza.price);<br>
Expected Output: 13<br>

Test: "It should check for size of pizza, if small change price to 6"<br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Small");<br>
      newPizza.pizzaPriceAdjuster();<br>
      console.log(newPizza.price);<br>
Expected Output: 6<br>

Test: "It should add 1 to size price for each pizza topping"<br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium");<br>
      newPizza.pizzaPriceAdjuster();<br>
      console.log(newPizza.price);<br>
Expected Output: 10<br>

Test: "It should not add anything to sized price if no toppings are chose"<br>
Code: let newPizza = new Pizza([], "Medium");<br>
      newPizza.pizzaPriceAdjuster();<br>
      console.log(newPizza.price);<br>
Expected Output: 8<br>

Test: "It should add 1 to size price for each pizza topping regardless of size and amount of toppings" <br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives", "Artichokes"], "Large");<br>
      newPizza.pizzaPriceAdjuster();<br>
      console.log(newPizza.price);<br>
Expected Output: 13<br>