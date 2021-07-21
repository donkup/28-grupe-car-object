const { doors } = require("./zapasData");

class Car {
    constructor(data) {
        this.carData = data;
    }
    intro() {
        console.log(`this is ${this.carData.brand}`);
    }
    doorsCount() {
        console.log(`${this.carData.brand} has ${this.carData.doors.length} doors`);

    }
    doorsWorking() {
        let workingDoors = 0;
        for (let i = 0; i < this.carData.doors.length; i++) {
            if (this.carData.doors[i].working === true) {
                workingDoors++;
            }
        }
        if (workingDoors === this.carData.doors.length) {
            console.log(`${this.carData.brand} has ${this.carData.doors.length} doors and all works!`);
        } else {
            console.log(`${this.carData.brand} has ${this.carData.doors.length} doors, but only ${workingDoors} is working.`);
        }
    }
    maxDistance() {
        let maxAtstumas = Math.round(this.carData.tank.maxSize / this.carData.fuelComsumption * 100);
        console.log(`${this.carData.brand} can travel maximum ${maxAtstumas} km.`);

    }
    canTravel() {

    }




}

module.exports = Car;