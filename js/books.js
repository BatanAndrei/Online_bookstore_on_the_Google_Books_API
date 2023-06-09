export function initRequest() {
    const showCaseBooks = document.querySelector('.showecase-books');

    const params = new URLSearchParams(window.location.search);
    params.set('q', 'subject:Architecture');
    params.set('key', 'AIzaSyA6rzxK7JdhGxWOanC61q6X0V7Ya71YS8E');
    params.set('printType', 'books');
    params.set('startIndex', 0);
    params.set('maxResults', 2);
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
          
          let dataItems = data.items;
          
           dataItems.forEach(item => {
              let books = `<div class="book-position">
                                <img class="book-position_image" src="${item.volumeInfo.imageLinks.thumbnail}">
                                <div class="book-position_info"></div>
                            </div>`; 
                   
                                console.log(item)
              showCaseBooks.innerHTML += books;    
        });  
        
          //console.log(resu);
        })
        .catch(() => { console.log('error') });
}

//data.items[0].volumeInfo.title
//data.items[0].volumeInfo.imageLinks.thumbnail