interface Button {
  click: () => void;
}
interface Input {
  onChange: () => void;
}

interface Factory {
  createButton: () => Button;
  createInput: () => Input;
}

class WindowsButton implements Button {
  click() {
    console.log("I click");
  }
}
class WindowsInput implements Input {
  onChange() {
    console.log("I onChange");
  }
}

class LinuxButton implements Button {
  click() {
    console.log("I click, but I'm Linux");
  }
}
class LinuxInput implements Input {
  onChange() {
    console.log("I onChange, but I'm Linux");
  }
}

class WindowsFactory implements Factory {
  createButton() {
    return new WindowsButton();
  }
  createInput() {
    return new WindowsInput();
  }
}

class LinuxFactory implements Factory {
  createButton() {
    return new LinuxButton();
  }
  createInput() {
    return new LinuxInput();
  }
}

class Application {
  private button: any;
  private input: any;

  private factory;

  constructor(factory: Factory) {
    this.factory = factory;
  }

  createUI() {
    this.button = this.factory.createButton();
    this.input = this.factory.createInput();

    return this;
  }
  click() {
    this.button.click();
  }
  write() {
    this.input.onChange();
  }
}

class Main {
  main() {
    const myOS = "Linux";
    const factory =
      myOS === "Linux" ? new LinuxFactory() : new WindowsFactory();

    const application = new Application(factory);

    application.createUI();
    application.click();
  }
}
