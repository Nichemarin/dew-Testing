import User from "./user.js";

class Post {
  name;
  #number = 0;
  #subscribers = [];

  constructor(name) {
    this.name = name;
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }

  getSubscribers() {
    return this.#subscribers.map((user) => user.name).join(",");
  }

  attach(user) {
    if (user instanceof User && !this.#subscribers.includes(user)) {
      this.#subscribers.push(user);
    }
  }

  detach(user) {
    const index = this.#subscribers.indexOf(user);
    if (index !== -1) {
      this.#subscribers.splice(index, 1);
    }
  }

  publish() {
    this.#number += 1;
    return this.#subscribers.map((user) => user.notify(this));
  }
}

export { Post };
export default Post;
