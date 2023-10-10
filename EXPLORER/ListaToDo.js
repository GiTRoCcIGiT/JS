//https://momentjs.com
const moment = require("moment");

class elemetToDo
{
    static statusy = ["Nowy", "W trakcie", "Wykonane"];
    zadanie; //tekst
    status; // numer
    czas_konca; //dataczas
    historia = []; //

    constructor(zadanie, czas_konca = -1)
    {
        if(czas_konca == -1)
            this.czas_konca = moment().add(100, 'years');
        else this.czas_konca = moment(czas_konca);
        this.status = 0;
        this.czas_wykonania = null;
        this.zadanie = zadanie
        this.dodajDoJistorii();
    }

    dodajDoJistorii()
    {
        this.historia.push({status:this.status,statusnazwa:elemetToDo.statusy[this.status], czasstatusu:moment()})
    }

    poCzasie()
    {
        return (moment() >= this.czas_konca && this.status != 2) ||
            (this.status != 2 && this.czas_konca < this.czas_wykonania);
    }

    zmienStatus(nowyStatus)
    {
        this.status = nowyStatus;
        if(nowyStatus == 2)
            this.czas_wykonania = moment();
        else
            this.czas_wykonania = null;
        this.dodajDoJistorii()
    }
}

class listaZadan
{
    lista = []

    dodajZadanie(zadanie, czas_konca = -1)
    {
        let element = new elemetToDo(zadanie, czas_konca)
        this.lista.push(element);
    }

    szukaj(nazwa){
        return this.lista.find(e => e.zadanie == nazwa);
    }

    zmienStatus(nazwa, nowyStatus)
    {
        let zadanie = this.szukaj(nazwa);
        zadanie.zmienStatus(nowyStatus);
    }

    zadanieNaDzis()
    {
        let terazplus24h = moment().add(24, 'hours');
        console.log(terazplus24h);
        return this.lista.filter( e => 
            (e.status !=2 && e.czas_konca <= terazplus24h)
        );
    }

    zadaniaStatus(status)
    {
        return this.lista.filter( e => 
            (e.status == status)
        );
    }

    wyswietl(listaZadan)
    {
        listaZadan.forEach(element => {
            console.log(`Zadanie: ${element.zadanie}, poczasie: ${element.poCzasie()?'Tak':'Nie'}`);
            console.table(element.historia);
        });
    }
}


let todo = new listaZadan();

todo.dodajZadanie("Napisać program", "2021-03-26 11:00");
todo.dodajZadanie("Napisać program 1", "2021-03-24 11:00");
todo.zmienStatus("Napisać program 1", 2);
console.log("Zadania na dziś");
let zadanieNaDzis = todo.zadanieNaDzis();
todo.wyswietl(zadanieNaDzis);

console.log("Zadania");
todo.wyswietl(todo.lista);

console.log(todo);