interface ClientInterface {
  sum: (x: number, y: number) => number;
}

class Client implements ClientInterface {
  sum(x: number, y: number) {
    return x + y;
  }
}

class ThirdPartyProvider {
  giveData() {
    return {
      x: "6",
      y: "12",
    };
  }
}

class Adapter extends ThirdPartyProvider {
  giveDataAdapted() {
    const { x, y } = this.giveData();
    return { x: Number(x), y: Number(y) };
  }
}

const client = new Client();
const dataAdapted = new Adapter().giveDataAdapted();

client.sum(dataAdapted);
