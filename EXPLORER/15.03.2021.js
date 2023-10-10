let zmienn_obj = [
    {imie: "Paweł", nazwisko:"", telefon:""},
    {imie: "Jola", nazwisko:"", telefon:""}
]

// zmienn_obj.imie = "Oleksandr";
// zmienn_obj.nazwisko = "Linik";
// zmienn_obj.telefon = "+48123123123";

// zmienn_obj["imie"] = "Oleksandr 1"

zmienn_obj.sort( (a,b)=>{
    return a.imie >= b.imie ? 1 : -1;
})
console.log(a,b)

// console.log( zmienn_obj.imie)
// console.log(typeof zmienn_obj.imie)
