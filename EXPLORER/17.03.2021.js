/*
 {
    next: null,
    data: ""  
 }
*/

let stos = null;

function push(imie)
{
    let nowy_obj = {next: stos, imie: imie}
    stos = nowy_obj;
    return nowy_obj;
}

function pop()
{
    let elem_stosu = stos;
    if(stos != null)
    {
        stos = stos.next;
    }
    elem_stosu.next = null;
    return elem_stosu;
}

push("Paweł");
push("Tomek");
push("Marcin");
push("Marcin2");
push("Marcin3");
push("Marcin4");

function szukaj_imie(imie)
{
    let tmp_stos = stos;
    while(tmp_stos != null && tmp_stos.next != null && tmp_stos.imie != imie)
    {
        tmp_stos = tmp_stos.next;
    }
    if(tmp_stos.imie == imie)
    {  
        return tmp_stos;
    }
    return null;    
}

console.log("Szukaj Marcina",szukaj_imie("Marcin").imie);

console.log(stos);
console.log("3:", pop());
console.log("2:", pop());
console.log("zostało na stosie", stos);