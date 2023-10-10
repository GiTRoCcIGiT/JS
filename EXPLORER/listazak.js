class pozZak {
    produkt;
    ilosc;
    wKoszyku = false;
    constructor(produkt, ilosc = 0){
        this.produkt = produkt;
        this.ilosc = ilosc;
    }
}

class listaZak {
    lista = [];
    dodaj(nazwaProd, ilosc)
    {
        let prod = new pozZak(nazwaProd, ilosc);
        this.lista.push(prod);
    }
    print()
    {
        this.lista.forEach( e => {
            console.log(`Produkt: ${e.produkt} ilość: ${e.ilosc} w koszyku: ${e.wKoszyku?'Tak':'Nie'}`)
        })
    }
    
    doKoszyka(produkt, status=true)
    {
        this.lista.find( e=> e.produkt == produkt).wKoszyku = status; 
        
    }
    
}

let zak = new listaZak();
zak.dodaj("Masło", 10);
zak.doKoszyka("Masło");
zak.dodaj("chleb", 5);
zak.print();

