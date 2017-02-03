import { data } from "./helper";

const container = document.querySelector(".container");

class Parent {
    length: number;
    constructor(){}
    getLength() {
        this.length = 15;
        return console.log(this.length)
    }
}

interface Address {
    street: string;
    city: string;
}

class Ball{
    top: number;
    left: number;
}

class MyClass extends Parent{
    width: number;
    top: number;
    address: Address;

    constructor(width:number, top:number){
        super();
        this.width = width;
        this.top = top;
    }

    getSum(): number{
        let localCounter: number = this.width + this.top;
        console.log("localCounter", localCounter);
        return this.width + this.top;
    }
}

const counter: MyClass = new MyClass(10, 10);
counter.getSum();

const onInit = function() {};

onInit();