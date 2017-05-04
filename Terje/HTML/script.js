@import url('https://fonts.googleapis.com/css?family=Ranga');
body {
    background-color: palegoldenrod;
    display: inline-block; 
}
article{
    font-family: 'Ranga', cursive;
    font-size: 2em;
}
#artikkel{
    background-color: peachpuff;
    max-width: 1024px;
    /* for usual: px, %,
     for fonts: pt, em, rem*/
}
.paragrahv{
    z-index: 1;
    font-size: 0.8em!important;
}
nav ul li:nth-child(2){
    border-width: 1px;
    border-style: dashed; 
}
nav{
    background-color: indianred;
    font-size: 2em;
    color: slateblue;
    /*max-width: 350px;*/
    /*display: inline-block;*/
    display: flex;
    /*position: fixed;*/
    /*left: 50px;
    top: 10px;*/
    margin: 5px;
    padding: 0 20px 0 0;
}
nav:first-of-type{
    align-self: flex-end;
}
aside{
    display: inline-block;
}
footer{
    background-color: orange;
    height: 300px;
    order: -1;

}
#menuuTyhiAla{
    height: 200px;
}
#teine{
    left:300px;
}
#wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:  center;
    align-content: center;
}

.button{
    background-color: #4A5;
    /*0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F*/
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 2em;
    margin: 5px 5px;
    cursor: pointer;
    box-shadow: 5px 5px 5px darkgrey;
}
.button:hover{
    margin: 7px 7px;
    box-shadow: 3px 3px 5px darkgrey;
}
#backvideo{
    position: absolute;
    z-index: -100;
    min-width: 100%;
    min-height: 100%;
    background: url(http://thenewcode.com/assets/images/polina.jpg) no-repeat;
    background-size: cover;
}
.nav-pills li a{
    color: yellow;
}

@media (max-width: 600px){
    body{
        background-color: plum;
    }
}
@media screen and (min-width: 600px ) and (max-width: 1200px){
    body{
        background-color: yellow;
    }
}
"use strict";
var muutuja = 5;
var s6ne = "Tere päevast";
var massiiv =["tere", "Hi","Hommikust"];
var objekt2 = {"nimi":"Kalle","vanus":6};
var objekt= null;
var muutuja= undefined;
alert(objekt2["nimi"]);
alert(s6ne);
alert (massiiv[1]);
//alert(s6ne);
/*if ja switch*/
if (typeof objekt2["vanus"] === "string"){
alert (objekt2["nimi"]);
}else if (typeof objekt2 ["vanus"] === "number"){
alert ("arv");
}
muutuja = 6 +4;
muutuja++;
muutuja--;
muutuja+=2
var pikkus= massiiv.lenght;
for (var i=0; i<pikkus; ++i){
massiiv[i]=" ";
}
console.log (massiiv)
var text = "";
for (var x in objekt2){
text += (objekt2[x] +" ");
}
console.log (text);
var k = 0;
var summa = 0;
while (k<10){
if (k<0)
break;
//continue;
summa += k;
++k;
}
console.log (summa);
//do{}while(true); //haruldane

var pikkusS6ne = s6ne.lenght;
var s6naPos = s6ne.indexOf ("Hommik");
s6ne = s6ne.replace("Hommikust", "päevast");
s6ne = s6ne.toUpperCase();

function firstletterToUpper(str){
var laused = str.tolowerCase(),split(". ");
for (var i=0;, i<laused.lenght; ++i){
var t2hed =laused [i].split ("");
t2hed[0]=t2hed[0].toUpperCase();
laused[i]=t2hed.join("");
}


function domLoaded(){
    alert ("^Tere");
}
document.addEventListener("DomContentLoaded", domLoaded)

function domLoaded(){
    var pealkirjad=`document`.getElementsByTagName (h1);
    pealkirjad[0].classlist.remove("blockquote-reverse");
}
