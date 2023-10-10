let lista = null;

function dodaj(daneTekstowe, daneTekstowe1, daneLiczbowe) {
  let obj_tmp = {
    imie: daneTekstowe,
    nazwisko: daneTekstowe1,
    telefon: daneLiczbowe,
    nastepny_element: null,
  };

  let ostatni_element = lista;
  while (ostatni_element != null && ostatni_element.nastepny_element != null) {
    ostatni_element = ostatni_element.nastepny_element;
  }
  if(ostatni_element == null)
    lista = obj_tmp
  else  
        ostatni_element.nastepny_element = obj_tmp;
  return obj_tmp;
}

function usun_pierwszy()
{
    let element = lista;
    if(lista != null)
        lista = lista.nastepny_element
    element.nastepny_element = null;
    return element;
}

function szukaj_imie(imie)
{
    let tmp_lista = lista;
    if(!lista){
        return null
    }

    while(tmp_lista != null && tmp_lista.nastepny_element != null && tmp_lista.imie != imie)
    {
        tmp_lista = tmp_lista.nastepny_element;
    }

    if(tmp_lista.imie == imie)
    {  
        return tmp_lista;
    }
    return null;    
}

dodaj("Tomek","M.",123123123);
dodaj("Paweł","T.",123123123);
dodaj("Marcin","D.",123123123);
dodaj("Maciej","A.",123123123);

console.log(lista);

console.log("Szukaj Macieja ", szukaj_imie("Maciej"));

// console.log(usun_pierwszy());
// console.log(usun_pierwszy());

