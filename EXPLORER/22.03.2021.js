class ksiazkaTel {
    imie;
    nazwisko;
    telefon;
    wKsiazce = false;
    constructor(imie,nazwisko, telefon = 0){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
    }
}

class listaLud {
    lista = [];
    dodaj(imieCzl, telefon)
    {
        let czlowiek = new ksiazkaTel(imieCzl, telefon);
        this.lista.push(czlowiek);
    }
    print()
    {
        this.lista.forEach( e => {
            console.log(`Imie: ${e.imie}, Nazwisko: ${e.nazwisko}, Telefon: ${e.telefon}, w książce: ${e.wKsiazce?'Tak':'Nie'}`)
        })
    }
    
    doKsiazki(imie, status=true)
    {
        this.lista.find( e=> e.imie == imie).wKsiazce = status; 
        
    }

    szukImie(imie, telefon)
    {
        
    }
}




let zak = new listaLud();
zak.dodaj("Tomek", "L.", +48123123123);
zak.dodaj("Marcin", "K.", +48123123123);
zak.dodaj("Kuba", "D.", +48123123123);
zak.dodaj("Max", "A.", +48123123123);
zak.dodaj("Paweł", "F", +48123123123);
zak.doKsiazki("Tomek");
zak.doKsiazki("Paweł");
zak.doKsiazki("Kuba");
zak.doKsiazki("Max");
zak.print();
