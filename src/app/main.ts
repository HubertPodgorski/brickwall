import { data } from "./helper";


const randomColor= function() {
    let i: number;
    let j: number;
    for(j=1; j<8; j++){
        for(i=1; i<9; i++){
            let R: number = Math.floor((Math.random() *255)+1); 
            let G: number = Math.floor((Math.random() *255)+1); 
            let B: number = Math.floor((Math.random() *255)+1);
            const color: HTMLElement = <HTMLElement>document.querySelector(".col-" + i + ".row-" + j);
            color.style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";   
        }
    }
}

randomColor();

const ballElement: HTMLElement = <HTMLElement>document.querySelector(".ball");
const paddleElement: HTMLElement = <HTMLElement>document.querySelector(".paddle");

let a: number;
let i: any;
let j: any;
let table: any = [];
let tableInner: any = [];
let b:any;
for(i=0; i<3; i++){
    for(j=0; j<3; j++){
        let a: any = Math.random();
        if(a<=0.5){
            b = null;
        }
        else{
            b = a;
        }
        tableInner[j]= b;
    }
        table[i] = tableInner;
        tableInner = [];
};
console.log(table);


class Ball {
    posX: number;
    posY: number;
    dirX: number;
    dirY: number;

    constructor(posX: number, posY: number, dirX: number, dirY: number){
        this.posX = posX;
        this.posY = posY;
        this.dirX = dirX;
        this.dirY = dirY;
    }

    moveBall() {
        this.posX += this.dirX;
        this.posY += this.dirY;
    }
}

const ball: Ball = new Ball(311, 438, 1, -1);

setInterval(() => {
    let posX = ball.posX;
    let posY = ball.posY;
    ball.moveBall();

    ballElement.style.left = (posX * 1) + "px";
    ballElement.style.top = (posY * 1) + "px";
}, 10);