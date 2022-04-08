function Pizza() {
  this.toppings = {}
  this.size = {};
}

Pizza.prototype.addTopping = function(topping) {
  if (!this.toppings[topping]) {
    this.toppings[topping] = new Pizza(topping)
    return true;
  } else {
    return false;
  }
};

Pizza.prototype.removeTopping = function(topping) {
  if(this.toppings[topping]) {
    delete this.toppings[topping]
    return true;
  } else {
    return false;
  }
};

Pizza.prototype.addSize = function(size) {
  if (!this.size[size]) {
    this.size[size] = new Pizza(size)
    return true;
  } else {
    return false;
  }
}

function Topping(topping) {
  this.topping = topping;
}

function Size(size) {
  this.size = size;
}

function removeToppingUI(event) {
  let topping = $(this).siblings().first().text();
  event.data.list.removeTopping(topping);
  $(this).parent().remove();
}

function removeSizeUI(event) {
  let size = $(this).siblins().first().text();
  event.data.list.removeSize(size);
  $(this).parent().remove();
}

function createToppingsUI(topping, pizza) {
  let listedTopping = $("<li></li>");
  listedTopping.append("<span>" + topping + "</span>");
  
  let removeBtn = $("<button class='remove btn'>Remove</button>");

  removeBtn.click({list: pizza}, removeToppingUI);

  listedTopping.append(removeBtn);
  return listedTopping;
}

function createSizeUI(size, pizza) {
  let listedSize = $("<li></li>");
  listedSize.append("<span>" + size + "</span>");

  let removeBtn = $("<button class='remove btn'>Remove</button>");

  removeBtn.click({list:pizza})
}


$(document).ready(function() {
  let pizza = new Pizza();

  $("form").submit(function(e) {
    e.preventDefault();
    if (pizza.addTopping($("#topping").val())) {
      $("#topping-list ul").append(createToppingsUI($("#topping").val(), pizza));
    }
  });
});