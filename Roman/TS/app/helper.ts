namespace Helper{
    export function formatEmails(className:string, splitter:string) {
        let emails = document.getElementsByClassName(className);
        for (var index = 0; index < emails.length; ++index) {
            let emailParts = emails.item(index).innerHTML.split(splitter);
            let email = emailParts[0]+'@'+emailParts[1];
            let link = '<a href="mailto:' + email + '">'+email+'</a>';
            emails.item(index).outerHTML = link;
        }
    }
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