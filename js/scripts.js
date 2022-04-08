function Pizza(topping) {
  this.topping = [topping];
}

Pizza.prototype.addToppings = function(topping) {
  if (!this.topping[topping]) {
    this.topping[topping] = new Pizza(topping)
    return true;
  } else {
    return false;
  }
}

Pizza.prototype.removeToppings = function(topping) {
  if(this.topping[topping]) {
    delete this.topping[topping]
    return true;
  } else {
    return false;
  }
}

