function TablicaLosowa(a,b)
{
    let tab = []
    for (let i=0;i<=a;i++)
    {
        tab.push(Math.floor(Math.random()*b));
    }
    return tab;
}

function szukaj(a)
{
    return a == 100
}

function zadanie1()
{
    let tab = TablicaLosowa(1000,1000)
    var y = tab.filter(szukaj)
    console.log(y.length)
}

zadanie1()