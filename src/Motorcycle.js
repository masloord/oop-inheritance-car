var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
  this.make = make
  this.model = model
  this.year = year
  this.color = color
  this.seats = 3
  this.passengers = passengers || []
}

Motorcycle.prototype.wheelie= function()


module.exports = Motorcycle;
