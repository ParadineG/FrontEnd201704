//var muutuja : string = "Tere";
//alert(muutuja + " maailm!");
/**
 * Loomad
 */
var Loomad = (function () {
    function Loomad() {
        this.loomad = ['Kass', 'Koer'];
    }
    Loomad.prototype.lisaLoom = function (uusLoom) {
        this.loomad.push(uusLoom);
    };
    Loomad.prototype.eemaldaLoom = function (i) {
        this.loomad.splice(i, 1);
    };
    Loomad.prototype.kuvaLoomad = function () {
        console.log(this.loomad);
    };
    return Loomad;
}());
var olendid = new Loomad();
olendid.kuvaLoomad();
//# sourceMappingURL=main.js.map