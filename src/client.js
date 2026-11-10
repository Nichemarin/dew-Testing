import User from "./user.js";

class Client {
  billing;
  name;
  constructor(name) {
    this.name = name;
    this.billing = 0;
  }

  read(text) {
    return `${this.name} is reading ${text}`;
  }
}

export { Client };
export default Client;
