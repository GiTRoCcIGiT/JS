/*
//1. wprowadzając parametr a i b funkcja ma zwracać prawdę gdy a jest większe niż b//
function ss(a, b)
{
    return (a > b)
}
console.log(ss(3, 2))

//2. wprowadzając parametr a i b funkcja ma zwracać prawdę gdy a jest inne niż b//
function gg(a, b)
{
    return (a != b)
}
console.log(gg(3, 2))

//3. wprowadzając parametr a i b funkcja ma zwracać fałsz gdy a równe b//
function gg(a, b)
{
    return (a !== b)
}
console.log(gg(1,1))

//4. wprowadzając parametr a funkcja ma zwracać prawdę gdy a jest w zakresie 10-20//
function gg(a)
{
    return (a > 10 && a < 20)
}
console.log(gg(15))

//5. wprowadzając parametr a funkcja ma zwracać prawdę gdy a jest poza zakresem 10-20//
function gg(a)
{
    return (a < 10 && a < 20)
}
console.log(gg(9))

//6. wprowadzając parametr a funkcja ma zwracać prawdę gdy a jest różne od 11//
function gg(a)
{
    return (a >= 11)
}
console.log(gg(13))

//7. wprowadzając parametr a funkcja ma zwracać prawdę gdy a jest liczbą parzystą//
function gg(a)
{
    return (a % 2 == 0)
}
console.log(gg(12))

//8. wprowadzając parametr a funkcja ma zwracać prawdę gdy a jest liczbą nieparzystą//
function gg(a)
{
    return (a % 2 != 0)
}
console.log(gg(11))

//9. wprowadzając parametr a funkcja ma zwracać prawdę gdy a jest podzielne przez 5 bez reszty//
function gg(a)
{
    return(a / 5 != 0)
}
console.log(gg(25))

//10. napisz funkcje dzielenia gdzie będzie posiadać 2 parametry, nie zapomnij o zabezpieczeniu przeciwko dzieleniu przez zero//
function gg(a, b)
{
    if (a == 0 || b == 0)
    {
        return ('nie dzieli się przez zero')
    }
    else
    return (a / b)
}
console.log(gg(12,2))

//11. wprowadzając parametr a i b funkcja ma zwracać prawdę gdy a jest liczbą parzystą a b jest liczbą nieparzystą//
function gg(a, b)
{
    return (a % 2 == 0 && b % 2 != 0)
}
console.log(gg(12,11))


//12. wprowadzając parametr a i b funkcja ma zwracać prawdę gdy a jest liczbą parzystą a b jest równa 7//
function gg(a, b)
{
    return (a % 2 == 0 && b == 7)
}
console.log(gg(12,7))
*/


