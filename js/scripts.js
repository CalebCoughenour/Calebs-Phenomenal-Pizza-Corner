function Pizza() {
  this.toppings = {}
  this.size = {};
}

Pizza.prototype.addToppings = function(topping) {
  if (!this.toppings[topping]) {
    this.toppings[topping] = new Pizza(topping)
    return true;
  } else {
    return false;
  }
};

Pizza.prototype.removeToppings = function(topping) {
  if(this.toppings[topping]) {
    delete this.toppings[topping]
    return true;
  } else {
    return false;
  }
};

function Topping(topping) {
  this.topping = topping;
}

function Size(size) {
  this.size = size;
}
