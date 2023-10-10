// zadanie 1 //
function gg(a)
{
    return (a % 5 + 1)
}
console.log("Zadanie Nr " + gg(12))

// 3.Napisz funkcję która doda do tablicy 1000 losowych liczb naturalnych, sprawdź czy została dodana 100, wyświetl odpowiedni komunikat
function Find(){
    let tab = []
    for(let i=0;i<1000;i++)
    {
        tab.push(Math.floor(Math.random()*1000 + 1))
        if (tab[tab.length - 1] == 100) 
        {
    
            return true
        }

    }
    return false
}
console.log(Find)

// zadanie 2 //
function gg1(b)
{
    return ((3 + b) % 5 + 1)
}
console.log("Zadanie Nr " + gg1(12))

// 1.Napisz funkcję która uzupełni tablicę liczbami parzystymi od 1 do 1000, wyświetl je od 2 do 1000 i odwrotnie
let tabl = []
let  tabl1 = []
for(let i=1;i>1000;i++)
{
    tabl.push(Math.floor(Math.random()*1000 + 1))
}
function aa()
{
    for(let i=1;i<=tabl1.length;i++){
        if(i % 2 == 0){
            tabl1.push(i)
        }
    }
    return tabl1
}
console.log(aa())