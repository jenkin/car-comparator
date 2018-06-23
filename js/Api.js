
function datiArrivati(data) {
    let allMakes = data.Makes,
        countries = allMakes
            .map(function (make) { return make.make_country; })
            .filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
    console.log("Makes", allMakes);
    console.log("Countries", countries);
    $("#primary-selection .countries-menu").empty()

    countries.forEach(function (country) {
        let template = '<a class="dropdown-item" href="#">' + country + '</a>'
        $("#primary-selection .countries-menu").append(template);
        $("#secondary-selection .countries-menu").append(template);//PER LA SECONDA SELEZIONE
    });


    // filtro il paese selezionato dell utente - console.log(event) x vedere cosa clicca e poi filtro
    $("#primary-selection .countries-menu .dropdown-item").click(function (event) {        //#countries-menu e .dropecc è il selettore css
        let country = event.target.innerText            // event.target.innertext è il percorso che avviene quando l utente clicca (target)
        let countryMakes = allMakes.filter(
            function (make) {
                return make.make_country === country; // === è una comparazione 
            }
        )
        console.log(countryMakes)

        // Evento di MAKES in base alla selezione  di countries
        $("#primary-selection .makes-menu").empty() // svuotare il contenitore
        countryMakes.forEach(function (make) {
            $("#primary-selection .makes-menu").append('<a class="dropdown-item" href="#">' + make.make_display + '</a>');
        });
        event.preventDefault(); //non far risalire la pagina
    })

    //SECONDAY SELECTION
    $("#secondary-selection .countries-menu .dropdown-item").click(function (event) {        //#countries-menu e .dropecc è il selettore css
    let country = event.target.innerText            // event.target.innertext è il percorso che avviene quando l utente clicca (target)
    let countryMakes = allMakes.filter(
        function (make) {
            return make.make_country === country; // === è una comparazione 
        }
    )
    console.log(countryMakes)

    // Evento di MAKES in base alla selezione  di countries
    $("#secondary-selection .makes-menu").empty() // svuotare il contenitore
    countryMakes.forEach(function (make) {
        $("#secondary-selection .makes-menu").append('<a class="dropdown-item" href="#">' + make.make_display + '</a>');
    });
    event.preventDefault(); //non far risalire la pagina
    })




    // event onchange
    // let selectedCountry = ...
    // let makesPerCountry = allMakes.filter(function(make) { return make.make_country === selectedCountry; })

}

//let apiUrl = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459"
let apiUrl = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes"
let paramsString = ''
let finalUrl = apiUrl + paramsString

$.getJSON(finalUrl, datiArrivati)

console.log("CHIAMATA PARTITA")

