function Pizza(toppings) {
  this.topping = [toppings];
}

Pizza.prototype.addToppings = function(topping) {
  if (!this.topping[topping]) {
    this.topping[topping] = new Pizza(topping)
    return true;
  } else {
    return false;
  }
}
