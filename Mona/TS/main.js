//alert ("Tere")
var muutuja = "Tere";
//alert(muutuja + " maailm!");
var Aiad = (function () {
    function Aiad() {
        this.aiad = ['Kivi', 'Puu', 'Vesi'];
    }
    Aiad.prototype.lisaAed = function (uusAed) {
        this.aiad.push(uusAed);
    };
    Aiad.prototype.eemaldaAed = function (i) {
        this.aiad.splice(i, 1);
    };
    Aiad.prototype.kuvaAiad = function () {
        console.log(this.aiad);
    };
    return Aiad;
}());
var objektid = new Aiad();
objektid.kuvaAiad();
var Aiad = "";
function getPage() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            AiadHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "aed.htm", false);
    xmlhttp.send();
    document.getElementById("wrapper").innerHTML = AiadHTML;
}
getPage("aed.htm, ", wrapper, "););
//# sourceMappingURL=main.js.map