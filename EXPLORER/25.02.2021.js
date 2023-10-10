// function lt(a)
// {
//     for(let i=2; i<a; i++)
//     {
//         if(a % i == 0) console.log(i)
//     }
//     console.log(lt(6))
// }
// console.log("------------")

/*
let random1 = Math.floor(Math.random() * 100)

function random()
{
    for (let i=2; i<100; i++)
    {
        if(i % 2 == 0) console.log(i)
    } 
}
console.log(random(100))
*/

//let czas_start = new Date()  for(let i=0;i<100000;i++)

let tabl = []
let tabl1 = []
let sum = 0
function aa()
{
    for(let i=0;i<=1000;i++){
        if(i % 2 == 0)
        sum[i] += 1;
        return i
    }
}
console.log(aa())