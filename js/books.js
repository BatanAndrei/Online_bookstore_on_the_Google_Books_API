export function initRequest() {
    const showCaseBooks = document.querySelector('.showecase-books');

    const params = new URLSearchParams(window.location.search);
    params.set('q', 'subject:Architecture');
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
       
          const result = response.json();  //запись нового promisa
          
          return result;
        })
        .then((data) => {
          
          const dataItems = data.items;
          
           dataItems.forEach(item => {
              let books = `<div class="book-position">
                                <img class="book-position_image" src="${item.volumeInfo?.imageLinks?.thumbnail}">
                                <div class="book-position_info">
                                    <h2 class="book-position_info-author">${item.volumeInfo?.authors}</h2>
                                    <h2 class="book-position_info-title">${item.volumeInfo?.title}</h2>
                                    <div class="rating-block">
                                        <div class="rating-block_stars">${item.volumeInfo?.averageRating}</div>
                                        <h2 class="rating-block_count">${item.volumeInfo?.ratingsCount} review</h2>
                                    </div>
                                    <h2 class="book-position_info-description">${item.volumeInfo?.description}</h2>
                                    <h2 class="book-position_info-sale">${item.saleInfo?.retailPrice?.amount}</h2>
                                    <button class="btn_buy-now">buy now</button>
                                </div>
                            </div>`; 
                   
                                console.log(item)
              showCaseBooks.innerHTML += books;    
        });  
        
          //console.log(resu);
        })
        .catch(() => { console.log('error') });
}

