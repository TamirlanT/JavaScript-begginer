class VacuumCleaner {
    model = 'Cleaner';
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;

    constructor() {

    }

    startCleaning() {
        this.counterOfStarts++;
        console.log('method vacuumCleaner');
        console.log('I have benn started:', this.counterOfStarts, 'times');
    }
    goCharge() {
        console.log('method vacuumCleaner');
        console.log('Going to charge');
    }
}

const cleaner1 = new VacuumCleaner;

class DancingSeries extends VacuumCleaner {
    model = 'dancing series';
    power = 200;
    battarySize = 2100;
    isUVLampOn = false;

    swicthLamp() {
        console.log('Method Dancing Series');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
}

const dancing1 = new DancingSeries;

