import User from "./user.js";

class Client extends User {
  billing;

  constructor(name) {
    super(name);
    this.billing = 0;
  }

  notify(post) {
    if (typeof post.price === "number") {
      this.billing = Math.round((this.billing + post.price) * 100) / 100;
    }

    return super.notify(post);
  }
}

export { Client };
export default Client;
