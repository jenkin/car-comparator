
function datiArrivati(data){
    console.log(data)
}

let apiUrl = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459"
let paramsString = ''
let finalUrl = apiUrl + paramsString

$.getJSON(finalUrl, datiArrivati)

console.log("CHIAMATA PARTITA")

