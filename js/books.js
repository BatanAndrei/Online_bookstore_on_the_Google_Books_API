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

// https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=<ваш ключ API>&printType=books&startIndex=0&maxResults=6&langRestrict=en

// `https://www.googleapis.com/books/v1/volumes?${resultUrl}`, options

// 'https://evilinsult.com/generate_insult.php?lang=en&type=json'

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