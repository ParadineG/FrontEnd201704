//var muutuja : string = "Tere";
//alert(muutuja + " maailm!");
/**
 * Loomad
 */
class Loomad {
    constructor() {
    }
    
    lisaLoom(uusLoom : string){
        this.loomad.push(uusLoom);
    }
    eemaldaLoom(i : number){
        this.loomad.splice(i,1)
    }
    kuvaLoomad(){
        console.log(this.loomad);
    }
    private loomad : string[] = ['Kass', 'Koer'];
}
let olendid = new Loomad();
olendid.kuvaLoomad();

function getPage() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200 ) {
            document.getElementById("wrapper").innerHTML =
            this.responseText;
        }
    }
xmlhttp.open("GET", "loom.htm", true);
xmlhttp.send();
}
getPage();