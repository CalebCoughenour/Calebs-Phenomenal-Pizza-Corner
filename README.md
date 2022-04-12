# _Caleb's Phenomenal Pizza Corner_

#### By _**Caleb Coughenour**_

#### _This is a mock pizza restaraunt website made for an independent project at Epicodus._

<br>

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _Jquery_

<br>

## Description

_This webpage was created for an independent project at Epicodus. The page is a mock pizza restaraunt. The page will wait for user to submit the form and will display a price based off how many toppings have been added and what size the pizza is. Size costs are small($6), medium($8), large($10), x-large($13). Each topping adds $1 to total price._

<br>

## Setup/Installation Requirements

* Copy the repository URL named "Calebs-Phenomenal-Pizza-Corner"
* In a shell program, clone the copied repository to your desktop
* You can do this using the "git clone" command
* Open the newly cloned directory named "Calebs-Phenomenal-Pizza-Corner"
* From the top of this directory, open index.html

<br>

## Known Bugs

* No known bugs

<br>

## License

Licensed under The [MIT](LICENSE)

Copyright (c) _4/8/22_ _Caleb Coughenour_

<br>
<br>
<br>

***********************************************************************************

<br>

**Specs**

1. if no toppings added and size is small, price will be $6
2. adding one topping to the pizza adds $1 to price
3. adding multiple toppings adds $1 for each topping
4. user will pick small($6), md($8), large($10) or x-large($13)
5. final price will be toppings + size cost
6. final price and pizza with toppings will be displayed

<br>
<br>

**TESTS**

**Describe: Pizza()**

Test: "It should not return topping and size when input is entered" <br>
Code: let newPizza = new Pizza(); <br>
Expected Output: newPizza {toppings: undefined, size: undefined, price: 0} <br>

Test: "It should return topping and size when input is entered" <br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium") <br>
Expected Output: newPizza {(toppings: ["Pepperoni", "Olives"], size: "Medium", price: 0)} <br>

<br>
<br>
<br>

**Describe: pizzaPriceAdjuster()**

Test: "It should receive the length of the toppings array"
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium"); <br>
      newPizza.pizzaPriceAdjuster(); <br>
Expected Output: 2 <br>

Test: "The captured length should be 0 if theres no toppings added" <br>
Code: let newPizza = new Pizza([], "Medium"); <br>
      newPizza.pizzaPriceAdjuster(); <br>
Expected Output: 0 <br>

Test: "It should check for size of pizza beginning with medium and change price to 8" <br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium"); <br>
      newPizza.pizzaPriceAdjuster(); <br>
Expected Output: 8 <br>

Test: "It should check for size of pizza, if large change price to 10" <br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Large"); <br>
      newPizza.pizzaPriceAdjuster(); <br>
Expected Output: 10 <br>

Test: "It should check for size of pizza, if x-large change price to 13" <br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "X-Large"); <br>
      newPizza.pizzaPriceAdjuster(); <br>
Expected Output: 13 <br>

Test: "It should check for size of pizza, if small change price to 6" <br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Small"); <br>
      newPizza.pizzaPriceAdjuster(); <br>
Expected Output: 6 <br>

Test: "It should add 1 to size price for each pizza topping" <br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives"], "Medium"); <br>
      newPizza.pizzaPriceAdjuster(); <br>
Expected Output: 10 <br>

Test: "It should not add anything to sized price if no toppings are chose" <br>
Code: let newPizza = new Pizza([], "Medium"); <br>
      newPizza.pizzaPriceAdjuster(); <br>
Expected Output: 8 <br>

Test: "It should add 1 to size price for each pizza topping regardless of size and amount of toppings" <br>
Code: let newPizza = new Pizza(["Pepperoni", "Olives", "Artichokes"], "Large");<br>
      newPizza.pizzaPriceAdjuster(); <br>
Expected Output: 13 <br>

<br>
<br>
<br>

**Describe: extraCheeseAdjuster()**<br>

Test: "It should add 2 to price if extra cheese is selected"<br>
Code: let newPizza = new Pizza([], ["EXTRA CHEESE"], "Small")<br>
      newPizza.extraCheeseAdjuster();<br>
Expected Output: 7<br>

Test: "It should add 2 to price if extra cheese is selected for any size"<br>
Code: let newPizza = new Pizza([], ["EXTRA CHEESE"], "Large")<br>
      newPizza.extraCheeseAdjuster();<br>
Expected Output: 12<br>

Test: "It should not add any extra cost if extra cheese is not chosen"<br>
Code: let newPizza = new Pizza([], [], "Small")<br>
      newPizza.extraCheeseAdjuster();<br>
Expected Output: 6<br>