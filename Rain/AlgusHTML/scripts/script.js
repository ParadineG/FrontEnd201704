"use strict";
var muutuja = 5;
var s6ne = "Tere Hommikust";
var massiiv = ["Tere", "Hi", "Hommikust" ];
var objekt2 = {"nimi": "Kalle", "vanus": 6};
var objekt = null;
var muutuja2; //antakse väärtuseta muutuja
//alert(objekt2["nimi"]);
//alert(massiiv[0]);
//alert(s6ne);

//if ja switch
// != ei ole võrdne; && ja; === on võrdne; == võrdväärne; !== ei tohi olla võrdne; <=; >=;
// || või; ! ei;
if(typeof objekt2["nimi"] === "string"){
        alert(objekt2["nimi"]);
    }else if(typeof objekt2["vanus"] === "number"){
        alert("arv");
    }else{}

switch (muutuja) {
    case 0:
        alert("arv0");
        break;
        case 5:

    alert("arv5");
        break;

    default:
        break;
}
muutuja = 6 + 4;
// +;-;*,/ -võimalikud tehted
muutuja = 5 % 1;  //jääk
muutuja = muutuja + 1;
muutuja++; //sama mis eelmine tehe, liidab ühe juurde
++muutuja; // sama mis eelmine, kuid arv suurendatakse hiljem
muutuja--; --muutuja; //vähendab ühe võrra
muutuja += 2; // +=; -=; *=; /=


var pikkus = massiiv.lenght;
for(var i = 0; i < pikkus; ++i){
    massiiv[i] += " ";
} // pikkus on kolm, kuna massiivis on kolm elementi, see käiakse kolm korda läbi ja igale massiivi elemendiele lisatakse tühik
//alert(massiiv);
console.log(massiiv);  //teeb töö ära, kuid kuvab ainult INSPECT ELEMENT->Console aknas.


var text ="";
for(var x in objekt2){
    text += (objekt2[x] + " ");
} // see tsükkel käib läbi iga elemendi massiivis, ja kuvab väärtuse (kalle 6)
console.log(text);


var k = 0;
var summa = 0;
while (k<10) {
    if (k < 0)
        break;
        //continue; katkestab korraks???
    summa += k;
    ++k;
} // teeb läbi tsükli 0 -9 ja liidab kõik kokku, if on antud juhul üleliigne kuna meil on positiivsed arvud
console.log(summa)

//do{}while(true); //haruldane

//Teisendamine
var muutujaS6nena = muutuja.toString();  //muutuja tõlgendatakse tekstiks
muutujaS6nena = muutujaS6nena + muutujaS6nena;  // kui väärtus oleks 45 siis summa oleks 4545, kuna tegemist on tekstiga
String(summa); 

muutuja.toExponential(2); // tagastab kujul 4.00e+0
muutuja.toFixed(2); //kaks kohta peale nulli
muutuja.toPrecision(2); // kaks kohta peale koma, koos ümardamisega

var aasta = "2007.45";
Number(aasta); //teisendab sõne numbriks
parseInt(aasta); //teisendab sõne täisarvuks 2007
parseFloat(aasta); //teisendab sõne numbriks nt koos komaga 2007,45


var muutuja4 = Number.MAX_VALUE;
if(parseInt("arv 5" !== Number.Nan)){}  //kontrollib, kas on tegemist numbriga
//MAX_VALUE, MIN_VALUE, NEGATIVE_INFINITY, POSITIVE_INFINITY, NaN - Not a number

//S6ne funktsioonid

var pikkusS6ne = s6ne.length;
var s6nePos = s6ne.indexOf("Hommik"); //Leiab esimese H tähe positsiooni
var l6ppPos = s6ne.lastIndexOf("Hommik"); // Leiab viimase märgi

//Lõigata s6ne välja
s6ne = s6ne.slice(0, l6ppPos-1); // võtan s6ne -st Tere ja jätab hommiku ära

//Asendamine
s6ne = s6ne.replace("Hommikust", "Päevast"); // Hommikust asenab Päevast sõnaga

//Tähe suurus
s6ne = s6ne.toUpperCase();
s6ne = s6ne.toLowerCase();

//Funktsiooni tegemine
function tyhiFunktsioon(){/*sisu*/};
tyhiFunktsioon();

//Anonüümne funktsioon
(function(){

})(); //Anonüümne funktsiooni lõpp

function firstLetterToUpper(str){
    var laused = str.toLowerCase().split(". ");
    for(var i = 0; i < laused.lenght; ++i){
        var t2hed = laused[i].split("");
        t2hed[0]= t2hed[0].toUpperCase();
        laused[i]= t2hed.join("");
    }
    return laused.join(". ")
};
var tootlemataText = "esimeNe teKst. KUSKIL KOhas.";
var toodeldudText = firstLetterToUpper(tootlemataText);
console.log(toodeldudText);


s6ne = s6ne + s6ne;
s6ne = s6ne.concat(" ", "Juku", "...");
var massiiv2 = s6ne.split(" ");

//Regex
var pos = s6ne.search(/Hommik/i);

//Math
// E (euleri), PI, SQRT, LN2, LN10, LOG2E, LOG10E

muutuja = Math.pow(Math.PI, 2); // Pii astmes kaks

//asin(x), sin(x) ...
// abs(x), ceil(x) -ümardab üles, floor(x) -ümardab alla, round(x) -ümardab tavaliselt
//exp(x), log(x), pow(x,y) -astmele
muutuja = Math.floor(Math.random() *10); //random annab väärtuse 0-9
muutuja = Math.floor(Math.random() *10) + 2; // random 2-11

// Massiivi funktsioonid

massiiv = ["Õun","Pirn","Banaan"];
massiiv.toString(); // paneb massiivi sõneks
massiiv.join(", "); // paneb massiivi sõneks koma ja tühikuga eraldatud
massiiv.pop(); // "Banaan" //"Õun, Pirn
massiiv[0]; // Õun
massiiv.lenght;
massiiv.push("Tomat"); // Lisab Tomat massiivi ja ütleb uue massiivi pikkuse
//shift() ja unshift() lisab ja eemaldab esimese elemendi massiivis

massiiv[1] = "Kõrvits"; //vahetab elemendi välja 

//delete massiiv[1]  --MITTE TEHA - Undefined tulemus

massiiv = massiiv.splice(2, 1, "Ploom", "Vaarikas"); //lisab Plomi ja Vaarika massiivi vahele 
massiiv.concat(massiiv); // lisab massiivile teise massiivi juurde
massiiv = massiiv.slice(massiiv.length/2); //teeb massiivi kaks korda väiksemaks

//SORTEERIMINE
massiiv.sort();
massiiv.reverse();

//arvude sorteerimiseks 1,3,6,9

//Näide
massiiv.sort(function(a,b){return a-b;});

    var massiiv3 = [
		{"nimi": "Kalle", "vanus": 16},
		{"nimi": "Juku", "vanus": 12},
		{"nimi": "Pille", "vanus": 9}
	];
    massiiv3.sort(function(a, b){
        console.log( "võrdle " + a.vanus + ",  " +  b. vanus);
        return a.vanus - b.vanus;
    });
    console.log(massiiv3);


// Funktsioonid
console.log(Date()); //kutsub kuupäeva

function arvSorteerimine(a,b) {
    return a-b;
}
var lahutatu = arvSorteerimine(5,4);
massiiv2.sort(arvSorteerimine);

function Isik(nimi, vanus){
    this.nime = nimi;
    this.vanus = vanus; 
    this.muudaVanus = function(uusVanus){
        this.vanus = uusVanus;
    }
}
var isa = new Isik("Juhan", 70);
var ema = new Isik("Malle", 39);
isa.muudaVanus(41);
console.log(isa.nime + "vanus on" + isa.vanus);


//Kontrollib sisendit, ja annab teate, kuid hiljem võib ikka selle sisendi vastu võtta või mitte

var tekst = "";

try {
    if (tekst === "")
        throw "Teksti pole";

} catch (error) {
    //console.error(error);        //annab errori consooli
}
finally {

}

// call, apply - kutsuvad funktsiooni välja,  bind mitte, kuid bind fikseerib väärtuse ära ja kui tahad uut väärtust, siis tuleb uus bind kutsuda

// isa.muudaVanus.bind(new Isik2(22))(17);
// isa.muudaVanus.apply(new Isik2(22), [42]);
// isa.muudaVanus.call(new Isik2(22), 12);


//UUS TEEMA
(function(){
    //object literal module pattern
    var minuMoodul = {
        nimi: 'Juku',
        vanus: 34,
        ytlenimi: function(){
            console.log(this.nimi);
        },
        muudaNimi: function(uusNimi){
            this.nimi = uusNimi;
        }
    };
minuMoodul.muudaNimi('Kalle');
minuMoodul.ytlenimi()


})();

(function(){
    //revaling module pattern
    var minuMoodul = (function(){
        var nimi ='Juku';
        function ytleNimi(){
            console.log(nimi);
        };
        function muudaNimi(uusNimi){
            nimi = uusNimi;
        };
        return { muudaNimi: muudaNimi, ytleNimi: ytleNimi };
    })();
    minuMoodul.muudaNimi('Madis');
    minuMoodul.ytleNimi();
})();


//28.04.2017 klassikaline ja prototüüpne

// vanem_ "_" määrab muutuja lokaalsuse
// funktsioon p2randab määrab ära, et lapsobjekt all saaks kasutada juba üleval toodud muutujaid (nimetus, h22litsus)

/*(function(){
    function p2randab(laps, vanem){
        laps.vanem_ = vanem;
        laps.prototype = Object.create(
            vanem.prototype,
            {
                constructor: {
                    value: laps,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            }  
        );
    };
    //classical
    var Loom = function(nimetus, h22litsus){
        this.nimetus = nimetus;
        this.h22litsus = h22litsus;
    };
    Loom.prototype.nimeta = function(){
        console.log('See loom on ' + this.nimetus);
    };
    Loom.prototype.h22litse = function(){
        console.log(this.h22litsus);
    };
    //instansid
    var minuKass = new Loom('kass', 'mjau');
    var temaKoer = new Loom('koer', 'vuff');

    minuKass.h22litse();
    temaKoer.nimeta();

    //Pärandamine
    var Lind = function(nimetus, h22litsus, kasLendab){
        Lind.vanem_.call(this, nimetus, h22litsus);
        this.kasLendab = kasLendab;
    };
    p2randab(Lind, Loom);
    Lind.prototype.lenda = function(){
        if(this.kasLendab){
            console.log('Ma lendan');
        }else {
            console.log('Ära õrrita');
        }
    };
    Lind.prototype.nimeta = function(){
        console.log('See lind on ' + this.nimetus);
    }
    var sinuKana = new Lind('kana', 'pak-pak', false);
    sinuKana.nimeta();
    sinuKana.lenda();
})();*/
(function(){
    //prototypal
    var objekt = {
        klass: 'objekt',
        loo: function(v22rtused){
            var instant = Object.create(this);
            Object.keys(v22rtused).forEach(
                function(v6ti){
                    instant[v6ti] = v22rtused[v6ti];
                }
            );
            return instant;
        }
    };
    var loom = objekt.loo({
        klass: 'loom',
        klassifitseeri: function(){
            console.log(this.klass);
        },
        nimeta: function(){
            console.log('See loom on ' + this.nimetus);
        }  
    });
    var lind = loom.loo({
        klass: 'lind',
        nimeta: function(){
            console.log('See lind on ' + this.nimetus);
        },
        lenda: function(){
           if(this.kasLendab){
                console.log('Ma lendan');
            }else {
                console.log('Ära õrrita');
            } 
        }
    });

    var sinuKana = lind.loo({
        nimetus: 'kana',
        kaslendab: false
    });
    sinuKana.klassifitseeri();
    sinuKana.nimeta();
    sinuKana.lenda();
})();

// suhtlemine html-ga, info töötlemine otse lehitsejas !!!!!

(function(){
    document;
    document.getElementsByTagName('nav')[0];  //saad kätte esimese elemandi navigatsioonist
    document.getElementsByClassName('paragraph');
    var artikkel = document.getElementById('artikkel');
    document.querySelector('#artikkel');   // siia võib panna ka klassi vms
    document.querySelectorAll('.paragraph');
    $('.paragraph');
    artikkel.className;
    artikkel.classList; //ei ole veel IE 11 toetatud
    artikkel.parentElement; //antud juhul <main>
    artikkel.children; // annab lapse


})();

//kui leht on laetud kutsub välja funktsiooni alert TERE

//DOMContentLoaded - loeb ära htmli, Load - loeb terve lehe



function domLoaded(){
    
   var pealkirjad = document.getElementsByTagName('h1')
   pealkirjad[0].classList.add('blockquote-reverse');
 
}

function loaded(){
     alert('Tõsta pealkiri tagasi');
   var pealkirjad = document.getElementsByTagName('h1')
   pealkirjad[0].classList.remove('blockquote-reverse');
   pealkirjad[0].on
 
}
document.addEventListener('DOMContentLoaded', domLoaded)
window.onload = loaded;
//window.addEventListener('load', loaded);
// jquery-is sama saab ->
//$(...)


// Muudan vajutades nupu teksti htmlis ära
var pealkirjad = document.getElementsByTagName('h1');
var nupuke = document.getElementById("nupp");
function nupuvajutus(){
    this.innerHTML = "Vajutatud";
}
nupuke.addEventListener("click", nupuvajutus);
pealkirjad[0].addEventListener("click", nupuvajutus);
// nupuke.removeEventListener(); - kustutab mälust mutuja nupuke ja tema funktsiooni


//kalkulaatori tegemine

var muutujad = document.querySelectorAll("var input");
var vastus = document.getElementById("vastus");
function sisend(){
    var arv1 = parseFloat(muutujad[0].value) || 0;
    var arv2 = parseFloat(muutujad[1].value) || 0;
    vastus.innerHTML = arv1 + arv2;
    console.log(arv1 + " " + arv2);
}
//nupuke.addEventListener("click", sisend);  //arvutab siis kui vajutatakse nuppu
//muutujad[0].addEventListener("input", sisend);  //arvutab siis kui tuleb sisend
//muutujad[1].addEventListener("input", sisend);

// alljärgnev arvutab enter klahvi vajutamisel
function key(event){
    if (event.which === 13)
        sisend.call(this);
};
muutujad[0].addEventListener("keydown", key);
muutujad[1].addEventListener("keydown", key);


//callback, selleks et saata funktsioon argumendina edasi

function funk2(){
    console.log('Hello callback')
}
function funk(callback){
    callback();
}
funk(funk2); 

