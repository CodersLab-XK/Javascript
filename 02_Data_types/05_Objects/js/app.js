let car = {
    type: "Sedan",
    color: "green",
    engine: 2.5,
}
car.carDescription = car.type + " " + car.color + " " + car.engine;
console.log (car.carDescription);

//color

let color = {
    red: 100,
    green: 0,
    blue: 50,
}

let referenceColor = [(color.red=50), (color.green=50),]
console.log(color);