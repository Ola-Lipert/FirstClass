'use strict';

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var samsungGalaxyS6 = new Phone("Samsung", 1800, "grey");
var iPhone6s = new Phone("Apple", 2250, "silver");
var onePlusOne = new Phone("OnePlus", 2000, "black");

samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.printInfo();

