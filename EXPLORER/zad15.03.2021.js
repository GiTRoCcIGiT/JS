let ksiazka_telefonoczna = [{imie:"",nazwisko:"",telefon: ""}]

function w()
{
    
}

ksiazka_telefonoczna.push({imie:"1",nazwisko:"1",telefon: "+48123123123"})
ksiazka_telefonoczna.push({imie:"2",nazwisko:"2",telefon: "+48123123123"})
ksiazka_telefonoczna.push({imie:"3",nazwisko:"3",telefon: "+48123123123"})
ksiazka_telefonoczna.push({imie:"4",nazwisko:"4",telefon: "+48123123123"})
ksiazka_telefonoczna.push({imie:"5",nazwisko:"5",telefon: "+48123123123"})

console.log(ksiazka_telefonoczna)

ksiazka_telefonoczna.sort( (a,b) => {
    return a.telefon >= b.telefon ? 1 : -1;
})
console.log(ksiazka_telefonoczna)

ksiazka_telefonoczna.sort( (a,b) => {
    return a.imie >= b.imie ? 1 : -1;
})

console.log(ksiazka_telefonoczna)

let z = ksiazka_telefonoczna.filter(e => e.imie == "3")
console.log(z)

let y = ksiazka_telefonoczna.find(e=>e.imie == "2")
console.log(y)
