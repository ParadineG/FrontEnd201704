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

//
let nimekiri: HTMLElement[] = [];
async function getPage(file : string, loomaNimi: string) {
    let loomHTML: string = "";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200 ) {
            loomHTML = this.responseText;
        }
    }
xmlhttp.open("GET", file, false);
await xmlhttp.send();
let li = document.createElement('li');
li.innerHTML = loomHTML;
li.getElementsByTagName('span').item(0).innerText = loomaNimi;
nimekiri.push(li);
//document.getElementById("wrapper").innerHTML = loomHTML;
}
function loop() {
nimekiri.forEach((v: HTMLElement)=>{
    document.getElementById("wrapper").innerHTML += v;
    
});
}


getPage("loom.htm", "wrapper");
getPage("loom.htm", "id1");
getPage("loom.htm", "id2");
loop();
