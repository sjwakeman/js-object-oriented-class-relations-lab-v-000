// initialize store with key of drivers, passengers and trips that each point to an empty array
let store = {drivers: [], passengers: [], trips: []}
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
    constructor(name) {
        // increment driverId, then assign the driverId as the instance's id
        this.id = ++driverId;
        this.name = name;

        store.drivers.push(this);
    }

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        )
    }

    passengers() {
        return store.passengers.filter(
            function(passenger) {
                return passenger.driverId === this.id;
            }.bind(this)
        )
    }
}

class Passenger {
    constructor(name) {
        // increment passengerId, then assign the passengerId as the instance's id
        this.id = ++passengerId;
        this.name = name;
         
        store.passengers.push(this);
    }

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        )
    }

    drivers() {
        return store.drivers.filter(
            function(driver) {
                return driver.passengerId === this.id;
            }.bind(this)
        )
    }
}

class Trip {
    constructor(driver, passenger) {
        // increment tripId, then assign the tripId as the instance's id
        this.id = ++tripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;
          
         // insert in the trip to the store
        store.trips.push(this);
    }

    setDriver(driver) {
        this.driverId = driver.id;
    }
    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
    }
 

    setPassenger(passenger) {
        this.passengerId = passenger.id;
    }
    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
    }
}