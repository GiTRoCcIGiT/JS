/*
function l(...x) {console.log(x)}
let x = [1,3,4,5,6,3,4,34,204,4294,2785,41,768,2,13845,1052,34,1234,524,412,654,846,195,125,9473,8265,1449,834]

// ile jest liczb 4
 suma


for(let i=0; i<x.length; i++)
{
    l(i, x[i]);
}
*/

x = [12, 4, 5, 6, 4, 23, 12,48, 654, 4]
a = 0
console.log("Zad.1")
for (i of x)
{
    if  (i == 4)
    {
        a+=1
    }
}
console.log(a)

console.log("Zad.2")
let sum = 0
for(let i=0; i<x.length; i+=1)
{
    if (x[i] % 2 === 0)
    {
        sum += x[i]
    }
}
console.log(sum)

console.log("Zad.3")
for (i of x)
{
    if((i % 4 == 0)&&(i % 100 != 0)&&(i !== 400))
    {
        console.log(i)
    }
}

