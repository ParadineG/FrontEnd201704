class Loomad {
    constructor() {
        
    }
    lisaLoom(uusLoom : string){
        this.loomad.push(uusLoom);
    }
    eemaldaLoom(i : number){
        this.loomad.splice(i, 1);
    }
    kuvaLoomad(){
        console.log(this.loomad);
    }
    private loomad : string[] = ['Kass', 'Koer'];
}

var olendid = new Loomad();
olendid.kuvaLoomad();

let nimekiri: HTMLElement[] = [];
async function getPage(file: string, loomaNimi: string){
    let loomHTML: string = "";
    let xmlhttp =  new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
               loomHTML = this.responseText;
            }
    }
    xmlhttp.open("GET", file, false);
    await xmlhttp.send();

    let li = document.createElement('li');
    loomHTML = loomHTML.replace("{{nimi}}", loomaNimi)
    li.innerHTML = loomHTML;
    //let child =  li.children[0] as HTMLAnchorElement;
   // child.href = "http://google.com";
    li.getElementsByTagName('span').item(0).innerText = loomaNimi;
    nimekiri.push(li);
    //document.getElementById("wrapper").innerHTML = loomHTML;

}
function loop() {
    nimekiri.forEach((v: HTMLElement)=>{
        document.getElementById("wrapper").innerHTML += v.outerHTML;
    });
}


//document.getElementById("wrapper").innerHTML += 
async function kutsu (){
    await getPage("loom.htm", "wrapper");
    await getPage("loom.htm", "id1");
    await getPage("loom.htm", "id2");
    loop();
}
kutsu();