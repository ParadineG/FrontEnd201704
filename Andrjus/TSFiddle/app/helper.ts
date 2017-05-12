namespace Helper {
  export function getHTMLTemplate(file: string) {
      let partialHTML = '';
      let request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            partialHTML = this.responseText;
          } else {
            console.error('Request failed for: ' + file)
          }
        }
      }
      request.open('GET', file, false);
      request.send();
      return partialHTML;
  }

  export function parseHTML(target : string, mustache: string, content : string) {
    return target.replace(mustache, content);
  }
}
