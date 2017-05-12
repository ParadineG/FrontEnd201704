//alert ("Tere")
var muutuja : string = "Tere";
//alert(muutuja + " maailm!");
class Aiad  {
    constructor() {

    }
aiad : string[] = ['Kivi', 'Puu', 'Vesi'];
lisaAed(uusAed: string){
    this.aiad.push(uusAed);

}
eemaldaAed(i : number){
this.aiad.splice(i, 1);
}
kuvaAiad(){
console.log(this.aiad);
}
}
let objektid = new Aiad();
objektid.kuvaAiad();
let aiad:string ="";
function getPage(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
AiadHTML =this.responseText;
        }
    }
    xmlhttp.open("GET", "Aiad.htm", false);
    xmlhttp.send();
    let li = document.createElement('li');
    document.getElementById("wrapper"). innerHTML = AiadHTML;
}
getPage("Aiad.htm", "wrapper");