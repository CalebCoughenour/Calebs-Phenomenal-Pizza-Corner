function Pizza(toppings, extraCheese, size) {
  this.toppings = toppings;
  this.extraCheese = extraCheese;
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
};

Pizza.prototype.extraCheeseAdjuster = function() {  
  if (this.extraCheese.includes("EXTRA CHEESE")) {
    this.price += 2;
  }
};

function uncheckAll() {
  var boxes = document.querySelectorAll("#checkbox");
  for (var i = 0; i < boxes.length; i++) {
      boxes[i].checked = false;
  }
}

$(document).ready(function() {
  $("#pizza-form").submit(function(e) {
    e.preventDefault();

    let toppingsArray = [];
    let extraCheeseArray = [];

    let pizzaSize = $("#size").val()

    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      toppingsArray.push($(this).val());
    });
    
    $("input:checkbox[name=extra-cheese]:checked").each(function() {
      extraCheeseArray.push($(this).val());
    })

    let newPizza = new Pizza(toppingsArray, extraCheeseArray, pizzaSize);
    
    newPizza.pizzaPriceAdjuster();
    newPizza.extraCheeseAdjuster();

    
    $("#pizza-price").text("Your Grand Total: $" + newPizza.price);
        
    if (toppingsArray.length !== 0) {
      $("#pizza-toppings-display").text("The Toppings You Chose: " + toppingsArray.join(", "));
      if (extraCheeseArray.length !== 0) {
        $("#xcheese-display").text("Extra charge for: " + extraCheeseArray.join());
      }
    } else if (extraCheeseArray.length !== 0) {
      $("#xcheese-display").text("Extra charge for: " + extraCheeseArray.join());
    } else {
      $("#pizza-toppings-display").text("You chose a plain cheese pizza");
    }
    
    $(".pizza-display").fadeIn();
    $(".pizza-form-card").hide();
    $(".price-card").hide();
    
    $("#restart-order").click(function() {
      $(".pizza-display").fadeOut();
      $(".pizza-form-card").fadeIn();
      $(".price-card").fadeIn();

      uncheckAll();

    });
    
    
  });
});