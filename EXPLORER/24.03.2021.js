const moment = require('moment');
class Lista {
    ToDo;
    Doing;
    Done;
    Wtablice = false;
    constructor(ToDo, Doing, Done){
        this.ToDo = ToDo;
        this.Doing = Doing;
        this.Done = Done;
    }
}

class TablicaZadan {
    lista = [];
    dodaj(nazwa, nazwa1, nazwa2)
    {
        let zadanie = new Lista(nazwa, nazwa1, nazwa2);
        this.lista.push(zadanie);
    }
    print()
    {
        this.lista.forEach( e => {
            console.log(`To Do: ${e.ToDo}; Doing: ${e.Doing}; Done: ${e.Done}; W tablice: ${e.Wtablice?'Tak':'Nie'}`)
        })
    }
    
    doTablicy(ToDo, status=true)
    {
        this.lista.find( e=> e.ToDo == ToDo).Wtablice = status; 
        
    }

}




let zak = new TablicaZadan();
zak.dodaj("--Opis pokoju Mein Zimmer--", "--Tablica To Do--", "----");
zak.dodaj("--Zadanie marsz, bieg 5km w ciągu 1h--", "----", "----");
zak.dodaj("--Prezentacja -Polityka dynastyczna Kazimierza Wielkiego--", "----", "----");
zak.dodaj("----", "----", "----");
zak.dodaj("----", "----", "----");
zak.doTablicy("--Opis pokoju Mein Zimmer--", "--Tablica To Do--", "----");
zak.doTablicy("--Zadanie marsz, bieg 5km w ciągu 1h--", "----", "----");
zak.doTablicy("--Prezentacja -Polityka dynastyczna Kazimierza Wielkiego--", "----", "----");
zak.doTablicy("----", "----", "----");
zak.print();

console.log(moment().locale('pl').calendar());