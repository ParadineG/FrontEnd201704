"use strict";
function tyhiFunksioon(){/*sisu*/};
tyhiFunksioon();
(function(){
    /*muutuja tüübid*/
	var muutuja = 5;
	var s6ne = "Tere Hommikust Hommikust";
	var bool = false;
	var massiiv = ["Tere", "Hi", "Hommikust"];
	var objekt2 = {"nimi": "Kalle", "vanus": 6};
	var objekt3 = null;
	//var muutujal = undefined;
	//var muutuja2;
    if(muutuja === 10){
		//Kui muutuja on arv kümme
	}else if(muutuja >= 11){
		//kui muutuja ei eksisteeri
	}else if(!muutuja){
		//kui muutuja ei eksisteeri
	}else{
		//Kõik muu
	}
	var arvu = 3;
	switch(arvu){
		case 0:
			muutuja = 1;
			break;
		case 3:
			muutuja = 3;
			break;
		default:
			muutuja = 10;
	}

	/*artimeetilised lühendid*/
	muutuja++; ++muutuja;
	muutuja--; --muutuja;
	// +-*/
	muutuja = muutuja % 2;
	muutuja %= 2;
	//+= -= *= /=

	/*Tsükklid*/
	var pikkus = massiiv.length;
	for(var i = 0; i < pikkus; ++i){
		massiiv[i]+=" ";
	} //["Tere ", "Hi ", "Hommikust "];
	var text = "";
	for(var x in objekt2){
		text += (objekt2[x] + " ");
	}//"Kalle 6 "
	console.log(text);
	var k = 0;
	var summa = 0;
	while(k < 10){
		if(k < 0)
			break; //Katkestab tsükli
		//continue - mida kasutakse, et katkestada tsükkel korra
		summa += k; 
		++k;
	}//45
	console.log(summa);
	//do{}while(true); //Haruldane

	/*Teisendamine*/
	//Teised tüübid sõneks
	muutuja.toString();
	new String(muutuja);//sama mis eelmine;
    console.log(String(muutuja));
	//arv sõneks täpsusega
	muutuja.toExponential(2); //5.00e+0
	muutuja.toFixed(2); //5.00
	muutuja.toPrecision(2); //5.00 - koos ümardamisega
	var aasta = "2007"
	new Number(aasta);
	parseInt(aasta); //"2007 aasta"
	parseFloat(aasta); //Tagastab ka koma kohti
	/*fikseeritud väärtused*/
	var muutuja4 = Number.MAX_VALUE;
	if(parseInt("arv 5") !== Number.NaN){}
	//MAX_VALUE, MIN_VALUE, NEGATIVE_INFINITY
	//POSITIVE_INFINITY, NaN <- Not-a-Number

	/*s6ne funktsioonid*/
    var pikkusS6ne = s6ne.length;
    //Leiab esimese tähemärgi positsiooni kui ei leia -1
    var s6naPos = s6ne.indexOf("Hommik"); //s6ne.search("")
    //Leiab esimese tähemärgi positsiooni aga viimase sõna puhul
    var l6ppPos = s6ne.lastIndexOf("Hommik");
    //Lõigata sõne välja
    s6ne = s6ne.slice(0, l6ppPos-1); //s6ne.substr()
    //Asendamine
    s6ne = s6ne.replace("Hommikust", "Päevast");
    //Tähe suurus
    s6ne = s6ne.toUpperCase();
    s6ne = s6ne.toLowerCase();

    function firstLetterToUpper(str) {
        var laused = str.toLowerCase().split(". ");
        for(var i = 0; i < laused.length; ++i){
            var t2hed = laused[i].split("");
            t2hed[0]= t2hed[0].toUpperCase();
            laused[i] = t2hed.join("");
        }
        return laused.join(". ");
    };
    var tootlemataText = "esiMene lause. tEine lause.";
    var toodeldudText = firstLetterToUpper(tootlemataText);
    console.log(toodeldudText);

    s6ne = s6ne + s6ne;
    s6ne = s6ne.concat(" ", "Juku", "...");
    var massiiv2 = s6ne.split(" ");
    //Regex
    var pos = s6ne.search(/Hommik/i);

    //Math - matemaatika
    // E (euleri), PI, SQRT2, LN2, LN10 (naturaalsed logaritmid)
    //LOG2E, LOG10E (logaritmid eulerist)

    muutuja = Math.pow(Math.PI, 2);
    //asin(x), sin(x), tan(x) ...
    //abs(x), ceil(x), floor(x),  round(x) - ümardamine
    //exp(x), log(x), pow(x, y) - astmes
    muutuja = Math.floor(Math.random() *10); //0-9
    muutuja = Math.floor(Math.random() *10) + 2; //2-11

    /*massiivi funktsioonid*/
	massiiv = ["Õun","Pirn","Kurk"];
    massiiv.toString(); //"Õun,Pirn,Kurk"
    massiiv.join(", "); //"Õun, Pirn, Kurk"
    massiiv.pop(); //"Kurk" //"Õun, Pirn"
    massiiv[0]; //"Õun"
    massiiv.lengh;
    massiiv.push("Tomat");
    //Esimese elemendi eemaldamine ja lisamine
	//shift() ja unshift("Kaalikas")
	//"Kaalikas,Pirn,Kurk,Tomat"

    //elemendivahetus
    massiiv[1] ="Kõrvits";
    //delete massiiv[1]; //hoidu //"undefined" 
    massiiv = massiiv.splice(2, 1, "Ploom", "Vaarikas");
    //"Kaalikas,Kõrvits,Ploom,Vaarikas,Tomat"
    massiiv.concat(massiiv);
    massiiv = massiiv.slice(massiiv.length/2);

    /*massiivi sorteerimine*/
    massiiv.sort();
    massiiv.reverse();
    //arvude sorteerimiseks 1, 3, 6, 9
    massiiv.sort(function(a,b){return a - b;});

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

    /*Funktsioonid*/
    console.log(Date());

    function arvSorteerimine(a, b) {
        return a-b;
    }
    var lahutatu = arvSorteerimine(5,4);
    massiiv2.sort(arvSorteerimine);

    function Isik(nimi, vanus){
        this.nime = nimi;
        this.vanus = vanus;
        this.muudaVanus = function(uusVanus){
            this.vanus = uusVanus;
            console.log(this);
        }
    }
     function Isik2(vanus){

        this.vanus = vanus;
        this.muudaVanus = function(uusVanus){
            this.vanus = uusVanus;
            console.log(this);
        }
    }
    var isa = new Isik("Juhan", 70);
    var ema = new Isik("Malle", 39);
    isa.muudaVanus(41);
    console.log(isa.nime + " vanus on " + isa.vanus);

    var tekst = "";
    //...
    try {
        if(tekst === "")
            throw "Teksti pole";
        //...
    } catch (error) {
        //console.error(error);
    } 
    finally{

    }
    //call, apply, bind
    isa.muudaVanus.apply(new Isik2(22), [47]);
    isa.muudaVanus.call(new Isik2(22), 12);
    isa.muudaVanus = isa.muudaVanus.bind(new Isik2(22), 17);
    isa.muudaVanus(12);
  
})();
/*(function(){
    //object literal module patter
    var minuMoodul = {
        nimi: 'Juku',
        vanus: 34,
        ytleNimi: function(){
            console.log(this.nimi);
        },
        muudaNimi: function(uusNimi){
            this.nimi = uusNimi;
        }
    };
    minuMoodul.muudaNimi('Kalle');
    minuMoodul.ytleNimi();
})();*/
/*(function(){
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
})();*/
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
/*(function(){
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
})();*/
(function(){
    document;
    document.getElementsByTagName('nav')[0];
    document.getElementsByClassName('paragrahv');
    var artikkel = document.getElementById('artikkel');
    document.querySelector('#artikkel');
    document.querySelectorAll('.paragrahv');
    $('.paragrahv');
    artikkel.className;
    artikkel.classList;
    artikkel.parentElement;
    artikkel.children;
})();
var pealkirjad = document.getElementsByTagName('h1');
function domLoaded(){
    pealkirjad[0].classList.add('blockquote-reverse');
}
function loaded(){
    pealkirjad[0].classList.remove('blockquote-reverse');
}
document.addEventListener('DOMContentLoaded', domLoaded);
//window.onload = loaded;
window.addEventListener('load', loaded);
//$(document).ready();
//DOMContentLoaded, Load

var nuppuke = document.getElementById("nupp");
function nuppuvajutus(){
    this.innerHTML="Vajutatud";
}
nuppuke.addEventListener("click", nuppuvajutus);
//nuppuke.removeEventListener()
pealkirjad[0].addEventListener("click", nuppuvajutus);
var muutujad = document.querySelectorAll("var input");
var vastus = document.getElementById("vastus");
function sisend(){
    var arv1 = parseFloat(muutujad[0].value) || 0;
    var arv2 = parseFloat(muutujad[1].value) || 0;
    vastus.innerHTML = arv1 + arv2;
    console.log(arv1 + " " + arv2);
}
nuppuke.addEventListener("click", sisend);
//muutujad[0].addEventListener("input", sisend);
//muutujad[1].addEventListener("input", sisend);
function key(event){
    if(event.which===13)
        sisend.call(this);
};
muutujad[0].addEventListener("keydown", key);
muutujad[1].addEventListener("keydown", key);

/* callback */
function funk2(){
    console.log('Hello');
}
function funk(callback){
    callback();
}
funk(funk2);
//ECMAscript 6
(function(){
    const PI = 3.14;
    if(true){
        var myvar = 'ee';
        let mylet = 'ee';
        //PI += 1;
    }
    myvar += 'ss';
    //mylet += 'ss';
    //console.log(myvar + " " + mylet);

    //destruktureerimine
    let foo = {
        bar: 1,
        baz: 2
    };
    let {bar, baz} = foo;
    let tenses = ['me', 'you', 'him', 'her'];
    let [first, sec, third] = tenses;

    let s6ne = `Tere minu nimi on ${first} ja olen ${sec} aastane`;
    console.log(s6ne);
    /*
    ürituste registreerimine
    pildi galerii
    veebilehe jagamine
    analytiku yhendamine
    captcha
    meiliaadress jsis
    serverisse vormi saatmine
    interaktiivse menüü loomine
    css animation on mouse over
    simple game
    moduleeritud osad
    */

    /*
    html - media, tekst, struktrueeritud
    css - tausta määramine, font, viisakas näeks välja
    js - tegevus mis toimub nuppuvajutusel, kellaaja kuvamine
    */
})();