
//1. A jest mniejsze niż b i a jest równe 5//
function gg(a, b)
{
    return (a = 5 && b > a)
}
console.log(gg(5,6))

//2. b jest różne niż a i a jest parzyste//
function gg1(a1, b1)
{
    return (a1 % 2 == 0 && b1 != a1)
}
console.log(gg1(2,3))

//3. a lub b jest nieparzyste//
function gg2(a2, b2)
{
    return (a2 % 2 != 0) || (b2 % 2 != 0)
}
console.log(gg2(3,3))

//4. a jest parzyste lub b jest nieparzyste//
function gg3(a3, b3)
{
    return (a3 % 2 == 0) || (b3 % 2 != 0)
}
console.log(gg3(2,3))

//5. a należy do liczb 20-25 a b jest nieparzyste//
function gg4(a4, b4)
{
    return (a4 >= 20 && a4 <= 25 && b4 % 2 != 0)
}
console.log(gg4(23,3))

//6. a jest podzielne przez 3 a b przez 5//
function gg5(a5,b5)
{
    return (a5 % 3 == 0 && b5 % 5 == 0)
}
console.log(gg5(15,5))

//7. a i b są liczbami dodatnimi//
function gg6(a6, b6)
{
    return (a6 > 0 && b6 > 0)
}
console.log(gg6(13,3))

//8. a jest dodatnie i b jest ujemne//
function gg7(a7, b7)
{
    return (a7 > 0 && b7 < 0)
}
console.log(gg7(2,-3))

//9. a jest dodatnie a b jest różne od 0//
function gg8(a8, b8)
{
    return (a8 > 0 && b8 != 0)
}
console.log(gg8(3,12))

