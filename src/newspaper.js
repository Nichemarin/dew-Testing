class newspaper{
    name = "Diario de Avisos";
    district = "Santa Cruz de Tenerife";
    price = 1;
    #number = 0;

    constructor(name, price, district){
        this.name = name;
        this.district = district;
        this.price = price;
    }

    get summary(){
        return `${this.name} publication number ${this.#number} of ${this.district}`
    }
}

export { newspaper };
export default newspaper;