export function initRequest() {
    const params = new URLSearchParams(window.location.search);
    params.set('q', '"subject:Architecture"');
    params.set('key', 'AIzaSyA6rzxK7JdhGxWOanC61q6X0V7Ya71YS8E');
    params.set('printType', 'books');
    params.set('startIndex', 0);
    params.set('maxResults', 6);
    params.set('langRestrict', 'ru');

    let resultUrl = params.toString(); 

      const options = {
            method: 'GET',
            mode: 'cors'
        };

        fetch(`https://www.googleapis.com/books/v1/volumes?${resultUrl}`, options)
        .then((response) => {
       
          const result = response.json();  //запись нового promisa
          
          return result;
        })
        .then((data) => {
          
          console.log(data);
        })
        .catch(() => { console.log('error') });
}