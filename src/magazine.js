class magazine{
    name;
    topic;
    price;
    #number = 0;

    constructor (name, price, topic){
        this.name = name;
        this.topic = topic;
        this.price = price;
    }

     get summary(){
        return `${this.name} publication number ${this.#number} of ${this.topic}`
    }
}

export { magazine };
export default magazine;
