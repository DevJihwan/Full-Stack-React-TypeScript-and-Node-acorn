namespace InterfaceNamespace {
  interface Thing {
    name: string;
    getFullName: () => string;
  }

  interface Vehicle extends Thing {
    wheelCount: number;
    updatewheelCount: (newwheelCount: number) => void;
    showNumberOfwheels: () => void;
  }

  class Motorcycle implements Vehicle {
    name: string;
    wheelCount: number;
    constructor(name: string) {
      this.name = name;
    }

    updatewheelCount(newwheelCount: number) {
      this.wheelCount = newwheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }

    showNumberOfwheels() {
      console.log(`moved Automobile ${this.wheelCount} miles`);
    }
    getFullName() {
      return "MC-" + this.name;
    }
  }

  const moto = new Motorcycle("beginner-cycle");
  console.log(moto.getFullName());
}
