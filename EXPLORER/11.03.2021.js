function zadanie(numer, dzielnik=5)
{
    return numer % dzielnik + 1;
}

console.log("Mam zadanie do wykoania",
    zadanie(35),
    zadanie(35+3)
)

function TablicaLiczb(ile, pnp=0)
{
    let tab = [];
    for (let index = 1; index <= ile; index++) {
        if(index % 2 == pnp)
        {
            tab.push(index);
        }
        
    }
    return tab;
}


function tablicaLosowa(ile, doIluLosowac)
{
    let tab = [];
    for (let index = 1; index <= ile; index++) {
        tab.push(Math.floor( Math.random()*doIluLosowac));
        
    }
    return tab;
}

function zadanie1()
{
    let tab = TablicaLiczb(10)
    console.log(tab);
    console.log(tab.reverse());
}

function zadanie2()
{
    let tab = TablicaLiczb(10,1)
    console.log(tab);
    console.log(tab.reverse());
}

function zadanie3() 
{
    return tablicaLosowa(10,1000).find( e => e==100) == 100;
}

function zadanie4()
{
    return tablicaLosowa(10, 1000).sort();
}

function zadanie5()
{
    return zadanie4().reverse();
}


zadanie1();
zadanie2();

console.log(
zadanie3(),
zadanie4(),
zadanie5()
);