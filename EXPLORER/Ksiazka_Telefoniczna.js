let stos = null; 

function push(imie,nazwisko,telefon)
{
    let nowy_obj = {next: stos, imie: imie, nazwisko: nazwisko, telefon: telefon}
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

push({imie:"Tomek",nazwisko:"1",telefon:"+48123123123"});
push({imie:"Paweł",nazwisko:"2",telefon:"+48123123123"});
push({imie:"Marcin",nazwisko:"3",telefon:"+48123123123"});
push({imie:"Maciej",nazwisko:"4",telefon:"+48123123123"});
push({imie:"Łukasz",nazwisko:"5",telefon:"+48123123123"});
push({imie:"Kuba",nazwisko:"6",telefon:"+48123123123"});
push({imie:"Max",nazwisko:"7",telefon:"+48123123123"});

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

console.log("Szukaj Łukaza " ,szukaj_imie(Łukasz).imie);
console.log(stos)