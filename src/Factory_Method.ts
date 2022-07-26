interface TransportInterface {
  timeUntilDelivery: string;
  type: string;
  deliver: () => string;
}

interface Creator<T> {
  create: () => T;
}

class Transport implements TransportInterface {
  public timeUntilDelivery;
  public type;

  constructor(timeUntilDelivery: string, type: string) {
    this.timeUntilDelivery = timeUntilDelivery;
    this.type = type;
  }

  deliver() {
    return "Entregar";
  }
}

class ConcreteCreatorTruck implements Creator<Transport> {
  create(): Transport {
    return new Transport("15 Days", "Truck");
  }
}

class ConcreteCreatorShip implements Creator<Transport> {
  create(): Transport {
    return new Transport("25 Days", "Ship");
  }
}

const concreteCreatorShip = new ConcreteCreatorShip();
const concreteCreatorTruck = new ConcreteCreatorTruck();

const ship = concreteCreatorShip.create();
const truck = concreteCreatorTruck.create();
