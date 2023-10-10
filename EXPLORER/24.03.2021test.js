//https://momentjs.com

const moment = require('moment');

class ListaToDo {
    ToDo;
    Wtablice = false;
    constructor(ToDo){
        this.ToDo = ToDo;
    }
}

class ListaDoing {
    Doing;
    Wtablice1 = false;
    constructor(Doing){
        this.Doing = Doing;
    }
}

class ListaDone {
    Done;
    Wtablice2 = false;
    constructor(Done){
        this.Done = Done;
    }
}

class TablicaZadanToDo {
    lista = [];
    dodaj(nazwa)
    {
        let zadanie = new ListaToDo(nazwa);
        this.lista.push(zadanie);
    }
    print()
    {
        this.lista.forEach( e => {
            console.log(`To Do: ${e.ToDo}; W tablice: ${e.Wtablice?'Tak':'Nie'}`)
        })
    }
    
    doTablicy(ToDo, status=true)
    {
        this.lista.find( e=> e.ToDo == ToDo).Wtablice = status; 
        
    }

}

class TablicaZadanDoing {
    lista = [];
    dodaj1(nazwa1)
    {
        let zadanie1 = new ListaDoing(nazwa1);
        this.lista.push(zadanie1);
    }
    print1()
    {
        this.lista.forEach( e => {
            console.log(`Doing: ${e.Doing}; W tablice: ${e.Wtablice1?'Tak':'Nie'}`)
        })
    }
    
    doTablicy1(Doing, status=true)
    {
        this.lista.find( e=> e.Doing == Doing).Wtablice1 = status; 
        
    }

}

class TablicaZadanDone {
    lista = [];
    dodaj2(nazwa2)
    {
        let zadanie2 = new ListaDone(nazwa2);
        this.lista.push(zadanie2);
    }
    print2()
    {
        this.lista.forEach( e => {
            console.log(`Done: ${e.Done}; W tablice: ${e.Wtablice2?'Tak':'Nie'}`)
        })
    }
    
    doTablicy2(Done, status=true)
    {
        this.lista.find( e=> e.Done == Done).Wtablice2 = status; 
        
    }

}

let tab1 = new TablicaZadanToDo();
tab1.dodaj("--Opis pokoju Mein Zimmer--");
tab1.dodaj("--Zadanie marsz, bieg 5km w ciągu 1h--");
tab1.dodaj("--Prezentacja -Polityka dynastyczna Kazimierza Wielkiego--");
tab1.doTablicy("--Opis pokoju Mein Zimmer--");
tab1.doTablicy("--Zadanie marsz, bieg 5km w ciągu 1h--");
tab1.doTablicy("--Prezentacja -Polityka dynastyczna Kazimierza Wielkiego--");
tab1.print();

let tab2 = new TablicaZadanDoing();
tab2.dodaj1("--Tablica To Do--");
tab2.dodaj1("----");
tab2.dodaj1("----");
tab2.doTablicy1("--Tablica To Do--");
tab2.doTablicy1("----")
tab2.doTablicy1("----")
tab2.print1();

let tab3 = new TablicaZadanDone();
tab3.dodaj2("--Marsz, bieg 6km/ do2h--");
tab3.dodaj2("--Prezentacja - Wybrana wyprawa krzyżowa--");
tab3.dodaj2("--djfhjdhfjdhf--");
tab3.doTablicy2("--Marsz, bieg 6km/ do2h--")
tab3.doTablicy2("--Prezentacja - Wybrana wyprawa krzyżowa--")
tab3.doTablicy2("--djfhjdhfjdhf--")
tab3.print2();


console.log(moment().locale('pl').format('L'));