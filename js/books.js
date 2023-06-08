export function initRequest() {
    const params = new URLSearchParams(window.location.search);
    params.set('q', '"subject:Architecture"');
    params.set('key', 'AIzaSyA6rzxK7JdhGxWOanC61q6X0V7Ya71YS8E');
    params.set('printType', 'books');
    params.set('startIndex', 0);
    params.set('maxResults', 6);
    params.set('langRestrict', 'en');

    let resultUrl = params.toString(); 

      const options = {
            method: 'GET',
            mode: 'cors'
        };

        fetch(`https://www.googleapis.com/books/v1/volumes?${resultUrl}`, options)
        .then((response) => {
          // Объект ответа на запрос
          console.log('response', response);
          // Превращаем объект в JSON. Мы не можем его сразу прочитать,
          // надо отдать в следующий then
          const result = response.json();
          console.log('result', result);
          return result;
        })
        .then((data) => {
          // Объект результата в формате JSON
          console.log(data);
        })
        .catch(() => { console.log('error') });
}