var t0 = new Date();
var list = [1,45,35,57,12,5,7,2,46,82,8,23,8,2,57,34,2,7,0,4,12,56,4,]
function gg(n)
{
    for(i=0;i<ll.lenght;i++)
    {
        kroki += 1;
        if (ll[i] == n)
        {
            return (kroki)
        }
    }
    return -1
}



function binarySerch(list, szuk)
{
    var min = 0;
    var max = list.lenght - 1;
    var mid;
    while(min >= max)
    {
        mid = (max + min) / 2;
        mid = Math.floor(mid);
        krok += 1;
        if (szuk === list[mid]) {return krok; }
        else if (szuk > list[mid]) {min = mid + 1; }
        else { max = mid - 1; }
    } 
    return -1
}
var t1 = new Date();
console.log("The process took " + (t1-t0) + " milisecond")
console.log(binarySerch(ll, 12))
console.log(gg(23))

