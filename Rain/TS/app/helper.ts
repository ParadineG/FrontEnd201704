namespace Helper{
    export function getParameterByName(name:string){
        let url = window.location.href;
        name = name.replace(/[\[\]]/g,'\\$&');
         var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
         let results = regex.exec(url);
         if(!results) return null;
         if(!results[2]) return '';
         return decodeURIComponent(results[2]).replace(/\+/g,' ');
    }

    export function onParameterChange(callback) {                       // vaatab kas URL aadress muutub või mitte
        var currentPage = window.location.href;
        setInterval(()=>{
            if(currentPage != window.location.href){
                currentPage = window.location.href;
                
            }
        }, 500 );


    }

    export function formatEmails(className: string, splitter: string){  //email @ sümboli muutmine
        let emails = document.getElementsByClassName(className);
        for (var index = 0; index < emails.length; index++) {
            let emailParts = emails.item(index).innerHTML.split(splitter);
            let email = emailParts[0]+'@' +emailParts[1];
            let link = '<a href="mailto:' + email + '">'+email+'</a>';
            emails.item(index).outerHTML = link;
        }
    }
    export function getHTMLTemplate(file:string) {
        let templateHTML = 'fail';
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange =  function() {
            
            if(this.readyState === 4 && this.status === 200){
                templateHTML = this.responseText;
            }
        }
        xmlHttp.open('GET', file, false);
        xmlHttp.send();
        return templateHTML;

    }
    export function parseHTMLString(target: string, mustache: string, content: string){
        return target.replace(mustache, content);
    }
}