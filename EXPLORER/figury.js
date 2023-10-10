let PI = Math.PI;
//koło//
let promień = 10;
let PK = PI * promień ** 2;
let OK = 2 * PI * promień;
console.log("Pole koła:", PK);

//kwadrat//
let a = 10;
let PKw = a * a;
console.log("Pole kwadratu: ", PKw);

//prostokąt//
let x = 3;
let y = 7;
let PP = x * y;
console.log("Pole prostokątu: ", PP);

//trójkąt//
let b = 3;
let c = 12;
let PT = b * c / 2;
console.log("Pole trójkątu: ", PT);

//trapez//
let ta = 5;
let tb = 6;
let th = 8;
let PTr = (ta + tb) * th / 2;
console.log("Pole Trapezu:", PTr);

//romb//
let re = 12;
let rf = 7;
let PR = re * re * rf;
console.log("Pole rombu: ", PR);

//funkcje//
function suma(p1,p2)
{
    return p1 + p2
}

let suma1 = (p1,p2) => {
    return p1 + p2;
}

let wyniksumy = suma1(10,20);
console.log("Wynik sumy: ",wyniksumy);
//funkcje//


//zadanie1//
//kwadrat//
function kwadrat(a1)
{
    return a1 * a1
}
let wynik = kwadrat(15);
console.log("Wynik PKw: ",wynik);

//prostokąt//
function prostokąt(b1,b2)
{
    return b1 * b2
}

let wynik1 = prostokąt(12,5);
console.log("Wynik PP: ", wynik1);

//koło//
function kolo(c1)
{
    return PI * c1 ** 2;
}

let wynik2 = kolo(7);
console.log("Wynik PK: ", wynik2);

//trójkąt//
function trójkąnt(d1,d2)
{
    return d1 * d2 / 2;
}

let wynik3 = trójkąnt(18,4);
console.log("Wynik PT: ", wynik3);

//trapez//
function trapez(e1,e2,e3)
{
    return (e1 + e2) * e3 / 2;
}

let wynik4 = trapez(14,22,9);
console.log("Wynik PTr: ", wynik4);

//romb//
function romb(ba,bb)
{
    return ba * ba * bb;
}

let wynik5 = romb(18,6);
console.log("Wynik PR: ", wynik5);
