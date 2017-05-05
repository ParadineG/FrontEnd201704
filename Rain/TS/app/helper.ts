namespace Helper{
    export async function getHTMLTemplate(file:string) {
        let templateHTML = '';
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange =  function() {
            if(this.readyState === 4 && this.status === 200){
                templateHTML == this.responseText;
            }
        }
        xmlHttp.open('GET', file, true);
        await xmlHttp.send();
        return templateHTML;

    }
}