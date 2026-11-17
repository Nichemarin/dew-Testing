import User from "./user.js";

class Post {
    name;
    #number = 0;
    #subscribers = [];

    constructor (name){
        this.name = name;
    }

    get summary(){
        return `${this.name} publication number ${this.#number}`
    }

    getSubscribers(){
        return this.#subscribers.map(user => user.name).join(", ");
    }

    attach(User){
        
        if (!this.#subscribers.includes(User.name)){
            this.#subscribers.push(User);
        }
    }
}

export { Post };
export default Post;
