var Car = require('./Car.js')

// Implement your Truck here
function Truck (make, model, year, color, seats, passengers) {
  this.make = make
  this.model = model
  this.year = year
  this.color = color
  this.seats = 3
  this.passengers = passengers || []
}
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;
var x = new Car('Mazda' , '3' , '2000' ,'Yellow',3 , [name]);
var y= new Truck('Monster' , 'Toyota' ,'1996' , 'Blue' , 2, [name] )
x instanceof Car
y instanceof Truck



module.exports = Truck
