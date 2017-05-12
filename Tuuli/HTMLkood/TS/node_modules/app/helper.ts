namespace Helper{
    export function getHTMLTemplate(file: string) {
        let templateHTML = 'fail';
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            console.log(this.status);
            if(this.readyState === 4 && this.status === 200){
                templateHTML = this.responseText;
            }
        };
        xmlHttp.open('GET', file, false);
        xmlHttp.send();
        return templateHTML;
    }
    export function parseHTMLString(target:string, mustache: string, content:string) {
        return target.replace(mustache, content);
    }
}