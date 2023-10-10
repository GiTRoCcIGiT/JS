
/*
1) kolor niebieski i szrokość 5-10 lub wysokość 3-4
2) kolor czerwony i szrokość 3 lub wysokość 6-7
3) kolor czerwony i szrokość mniej niż 3  więcej niż 5 lub wysokość inna niż zero

*/
/*
let color = 'red'
let width = 10;
let height= 20;
*/
/*
    ()
    && i wymaga by wszystkie były prawdziwe
    || lub wymaga by jeden był prawdziwy
    <
    >
    <=
    >=
    ==
        0 == false to jest prawda
        1 == true to jest prawda
    !=
    ! negacja
    !== 
            '0' === 0 to  false
            '0' === '0' to true

    ===
        1 === true to jest false

*/
/*
let wyr = (color == 'red' && width == 10) || (color != 'red' && height == 5) // kolor jest czerwony

function test(_col, _wys, _szer)
{
    return (color == _col && width == _szer) || (color != 'red' && height == _wys)
}


console.log(test('red', 5, 10))
console.log(test('red', 10, 15))
console.log(test('red', 20, 10))
console.log(test('green', 20, 30))
console.log(test('red', 15, 10))
*/
/*
1) kolor niebieski i szrokość 5-10 lub wysokość 3-4
2) kolor czerwony i szrokość 3 lub wysokość 6-7
3) kolor czerwony i szrokość mniej niż 3  więcej niż 5 lub wysokość inna niż zero

*/

/*
let color1 = 'blue'
let width1 = 10;
let height1 = 4;

let log = (color1 == 'blue' && width1 >= 5) || (color1 != 'blue' && height1 >= 3)
function test1(_col1, _wys1, _szer1)
{
    return (color1 == _col1 && width1 == _szer1) || (color1 != 'blue' && height1 == _wys1)
}

console.log(test1('blue', 5, 3))
*/

function test(_kol, _sze, _wys)
{
    return _kol == 'czerwony' && ((_sze < 3 && _sze > 5) || _wys != 0) 
}

console.log(test('czerwony', 5, 1))
console.log(test('czerwony', 3, 10))
console.log(test('czerwony', 4, 10))
console.log(test('czerwony', 5, 10))
console.log(test('czerwony', 4, 0))
console.log(test('czerwony', 5, 10))

