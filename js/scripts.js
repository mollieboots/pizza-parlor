// business logic for pizza
function Pizza(size, toppings, price) {
    this.size = size;
    this.toppings = toppings;
    this.price = price;
}

Pizza.prototype.priceCalculator = function (toppings, pizzaSize) {
    let totalCost = 0;
    let toppingsCost = toppings.length;
    if (pizzaSize == "Small") {
        totalCost = (toppingsCost * 1.5) + 10;
    } else if (pizzaSize == "Medium") {
        totalCost = (toppingsCost * 2) + 13;
    } else if (pizzaSize == "Large") {
        totalCost = (toppingsCost * 2.5) + 16;
    }
    return totalCost.toFixed(2);
}

Pizza.prototype.sumCalculator = function (price, totalSum) {
    totalCost += price;
    return totalCost;
};

// user interface logic
let grabSelectedToppings = function () {
    let toppings = [];
    $('#toppings-list :checked').each(function () {
        toppings.push($(this).val());
    })
    return toppings;
}

$(document).ready(function () {
    let totalSum = 0;
    $('button.submit').click(function (event) {
        event.preventDefault();

        let toppings = grabSelectedToppings();
        let pizzaSize = $('select.pizzaSize').val();
        let newPizza = new Pizza(pizzaSize, toppings, 0);
        let price = newPizza.priceCalculator(toppings, pizzaSize);
        newPizza.price = price;
        totalSum += parseInt(price);
        console.log(newPizza);

        if (toppings.length === 0) {
            $(".selectedtoppings").show().prepend("<span class='pizzaInfo'><h5>Just Cheese, Please!</h5>" + pizzaSize + "<br>" + "Total: $" + price);
        } else {
            $(".selectedtoppings").show().prepend("<span class='pizzaInfo'><h5>" + toppings + "</h5>" + pizzaSize + "<br>" + "$" + price);
        }

        $("input.toppingOption").prop("checked", false);

        $(".totalSum").text(" $" + totalSum.toFixed(2));
    })
});