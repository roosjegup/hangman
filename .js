//berekend random index en pakt daardoor een woord uit array 'woorden' []= daartussen: index geeft aan welk element wordt gepakt.
function kiesWoord(woorden) {
    "use strict";
    var gekozenWoord = woorden[Math.floor(woorden.length * Math.random())];
    return gekozenWoord;
}

var woorden = ['washington', 'adams', 'jefferson', 'madison', 'monroe', 'jackson', 'van buren', 'harrison', 'tyler', 'polk', 'taylor', 'fillmore', 'pierce', 'buchanan', 'lincoln', 'johnson', 'simpson grant', 'hayes', 'garfield', 'arthur', 'cleveland', 'mcKinley', 'roosevelt', 'taft', 'wilson', 'harding', 'truman', 'eisenhower', 'kennedy', 'johnson', 'nixon', 'ford', 'carter', 'reagan', 'bush', 'clinton', 'obama'];
//functie kiest woord in kiesWoord(woorden) en linkt dit aan var teRadenWoord
var teRadenWoord = kiesWoord(woorden);
//var teRadenWoordLijst split teRadenWoord in lijst per letter
var teRadenWoordLijst = teRadenWoord.split("");
//roept funcite updateGeradenwoord aan
var streepjes;

function nieuwSpel() {
    "use strict";
    var streepjes = "",
        i;

    for (i = 0; i < teRadenWoordLijst.length; i++) {
        streepjes = streepjes + "_";
    }
}
document.getElementById("geradenwoord").innerHTML = streepjes;

nieuwSpel();




var gewonnen = false;
var beurt = 1;
// maakt lijst voor letters die al geklikt zijn, gebruiker kan bijhouden welke letters al geklikt z-ijn.
var geklikteletters = [];
//print de geklikte letters door middel van id
document.getElementById("geklikteletters").innerHTML = geklikteletters;


//functie updatGeraden woord update geradenwoord (wat er toe nu toe geraden is)
//checkt of de letters uit het te raden woord al eerder geklikt zijn.
function updateGeradenwoord() {
    "use strict";
    var geradenwoord = "",
        letter,
        i;
    // in het begin i = 0 de index is kleiner dan lengte teRadenWoordlijst, zo lang duurt de loop.
    //wat is de lengte 5? loop 5 keer.
    for (i = 0; i < teRadenWoordLijst.length; i++) {
        //loop pakt pakt het i'de woord (begint bij eerste steeds +1 tot woord klaar)
        letter = teRadenWoordLijst[i];
        // length is groter dan nul: de lijst bestaat of bestaat de lijst niet. index kleiner dan 0 niet in lijst groter wel in lijst.
        if (geklikteletters.length > 0 && geklikteletters.indexOf(letter) > -1) {
            geradenwoord = geradenwoord + letter;
        } else {
            geradenwoord = geradenwoord + "-";
        }
    }

    document.getElementById("geradenwoord").innerHTML = geradenwoord;
    if (!geradenwoord.match("-")) {
        document.getElementById("image").src = "./image/gewonnen.png";
        gewonnen = true;
    }

}

//functie letterklik wordt aangeroepen door klikken op letter (letterklik in html)
function letterKlik(gekozenLetter) {
    "use strict";
    if (beurt < 14 && !gewonnen) {
        //is letter al geklikt, dan gebeurt er niks
        if (geklikteletters.length > 0 && geklikteletters.indexOf(gekozenLetter) > -1) {
            // doe niks
            console.log("doet niets");
        } else {
            //zet geklikte letter in lijst met al geklikte letters
            geklikteletters.push(gekozenLetter);
            //in html ook lijst updaten
            document.getElementById("geklikteletters").innerHTML = geklikteletters;
            //checkt of gekozen letter in te raden woord zit. (teRadenWoord)
            if (teRadenWoord.match(gekozenLetter)) {
                updateGeradenwoord();
            //zit letter er niet in, dan kom je in de volgende beurt. en veranderd de foto door naam+ beurt.
            } else {
                beurt = beurt + 1;
                var pad = "./image/streep" + beurt + ".png";
                document.getElementById("image").src = pad;
            }
        }
    }
}

document.getElementById("a").addEventListener("click", function() { letterKlik("a"); });
document.getElementById("b").addEventListener("click", function() { letterKlik("b"); });
document.getElementById("c").addEventListener("click", function() { letterKlik("c"); });
document.getElementById("d").addEventListener("click", function() { letterKlik("d"); });
document.getElementById("e").addEventListener("click", function() { letterKlik("e"); });
document.getElementById("f").addEventListener("click", function() { letterKlik("f"); });
document.getElementById("g").addEventListener("click", function() { letterKlik("g"); });
document.getElementById("h").addEventListener("click", function() { letterKlik("h"); });
document.getElementById("i").addEventListener("click", function() { letterKlik("i"); });
document.getElementById("j").addEventListener("click", function() { letterKlik("j"); });
document.getElementById("k").addEventListener("click", function() { letterKlik("k"); });
document.getElementById("l").addEventListener("click", function() { letterKlik("l"); });
document.getElementById("m").addEventListener("click", function() { letterKlik("m"); });
document.getElementById("n").addEventListener("click", function() { letterKlik("n"); });
document.getElementById("o").addEventListener("click", function() { letterKlik("o"); });
document.getElementById("p").addEventListener("click", function() { letterKlik("p"); });
document.getElementById("q").addEventListener("click", function() { letterKlik("q"); });
document.getElementById("r").addEventListener("click", function() { letterKlik("r"); });
document.getElementById("s").addEventListener("click", function() { letterKlik("s"); });
document.getElementById("t").addEventListener("click", function() { letterKlik("t"); });
document.getElementById("u").addEventListener("click", function() { letterKlik("u"); });
document.getElementById("v").addEventListener("click", function() { letterKlik("v"); });
document.getElementById("w").addEventListener("click", function() { letterKlik("w"); });
document.getElementById("x").addEventListener("click", function() { letterKlik("x"); });
document.getElementById("y").addEventListener("click", function() { letterKlik("y"); });
document.getElementById("z").addEventListener("click", function() { letterKlik("z"); });


// letter kan gekozen worden
//check van letter zit deze in het woord
// als deze letter in het woord zit
// plaats dan op goede plek
// zo niet
// load volgende jpg hangman in
//letter geklikt?
// niet mogelijk nog een keer klikken
