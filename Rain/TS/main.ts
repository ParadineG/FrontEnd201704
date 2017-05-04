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
