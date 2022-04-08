function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}


Pizza.prototype.pizzaPriceAdjuster = function() {
  let toppingsAdjuster = this.toppings.length;
  
  if (this.size === "Medium") {
    this.price += 8 + toppingsAdjuster;
  } else if (this.size === "Large") {
    this.price += 10 + toppingsAdjuster;
  } else if (this.size === "X-Large") {
    this.price += 13 + toppingsAdjuster;
  } else {
    this.price += 6 + toppingsAdjuster;
  }
  console.log(this.price);
};

$(document).ready(function() {
  $("#pizza-form").submit(function(e) {
    e.preventDefault();

    let pizzaSize = $("#size").val()
    let toppingsArray = [];

    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      toppingsArray.push($(this).val());
    });    

    let newPizza = new Pizza(toppingsArray, pizzaSize);
    
    newPizza.pizzaPriceAdjuster();
    console.log(newPizza);
    $("#pizza-price").text("Your Grand Total:" + " " + newPizza.price)

    
  });
});