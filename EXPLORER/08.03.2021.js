// zadanie 1 //
function gg(a)
{
    return ((a % 6) + 1)
}
console.log(gg(12))

// 1. Napisz funkcję która wyszukuje elementy w tablicy, listą elementów do wyszukania też jest tablica, wynik wyświetl na ekranie w firmie tablicy //
let arreyI = [1,2,3,4,5,6,7,8,9];
let empty = [];
let arreyII = [1,2];
arreyI.forEach((I) =>
{
    arreyII.forEach((II) => 
    {
        if(I == II)
        {
            empty.push(II)
        }
        return empty
    })
})
console.log(empty)

// zadanie 2 //
function gg1(b)
{
    return ((2 + b) % 6 + 1)
}
console.log(gg1(12))

// 3. mając tablicę [2,3,4,5,6,7,8,9] i tablicę [1,2,4,5,6,7,1,8] napisz funkcję która odejmie elementy tablicy od siebie //
let tab1 = [2,3,4,5,6,7,8,9];
let tab2 = [1,2,4,5,6,7,1,8];
