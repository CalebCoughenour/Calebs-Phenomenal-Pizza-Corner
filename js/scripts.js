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

