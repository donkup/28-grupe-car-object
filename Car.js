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
    canTravel(km) {
        let atstumas = Math.round(this.carData.tank.currentSize / this.carData.fuelComsumption * 100);
        if (km > atstumas) {
            console.log(`${this.carData.brand} can't travel ${km} km, it has fuel only for ${atstumas} km.`);
        }
        else {
            console.log(`${this.carData.brand} can travel ${km} km.`);
        }

    }
    continueTravel(km) {
        let atstumas = Math.round(this.carData.tank.currentSize / this.carData.fuelComsumption * 100);
        let reikPinigo = (km - atstumas) * (this.carData.fuelCostPerLitre * this.carData.fuelComsumption / 100);
        if (km <= atstumas) {
            console.log(`${this.carData.brand} can travel 50 km, no extra fuel is needed.`);
        } else {
            console.log(`${this.carData.brand} can't travel 500 km, you need ${reikPinigo.toFixed(2)} Euros for extra fuel.`);
        }
    }
    // let atstumas = Math.round(this.carData.tank.currentSize / this.carData.fuelComsumption * 100);
    // let kmKaina = Math.round(this.carData.fuelComsumption * this.carData.fuelCostPerLitre / 100);
    // // let reikiaPinigu = 0;
    // let reikiaPinigu = (km - atstumas) * kmKaina;

    // if (atstumas <= km) {
    //     console.log(`${this.carData.brand} can travel ${km} km, no extra fuel is needed.`);
    // } else {
    //     console.log(`${this.carData.brand} can't travel ${km} km, you need ${reikiaPinigu} Euros for extra fuel.`);
    // }

}






module.exports = Car;