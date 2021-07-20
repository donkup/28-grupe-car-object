class Car {
    constructor(data) {
        this.carData = data;
    }
    intro() {
        console.log(`this is ${this.carData.brand}`);
    }
    doorsCount() {
        let duruSk = 0;
        for (let i = 0; i < this.carData.doors.length; i++) {
            const duruSk = this.carData.doors[i];

            console.log(`${this.carData.brand} has ${duruSk}`);

        }

    }


}

module.exports = Car;