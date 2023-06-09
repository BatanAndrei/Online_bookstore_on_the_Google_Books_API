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
                                <img class="${item.volumeInfo?.imageLinks?.thumbnail ? "book-position_image" : "book-position_image-none"}" src="${item.volumeInfo?.imageLinks?.thumbnail}" alt="foto book">
                                <div class="book-position_info">
                                    <h2 class="book-position_info-author">${item.volumeInfo?.authors}</h2>
                                    <h2 class="book-position_info-title">${item.volumeInfo?.title}</h2>
                                    <div class="${item.volumeInfo?.averageRating ? "rating-block" : "rating-block-none"}">
                                        <div class="${item.volumeInfo?.averageRating ? "rating-block_stars" : "rating-block-stars-none"}">${item.volumeInfo?.averageRating}</div>
                                        <h2 class="${item.volumeInfo?.ratingsCount ? "rating-block_count" : "rating-block_count-none"}">${item.volumeInfo?.ratingsCount} review</h2>
                                    </div>
                                    <h2 class="book-position_info-description">${item.volumeInfo?.description}</h2>
                                    <h2 class="${item.saleInfo?.retailPrice?.amount ? "book-position_info-sale" : "book-position_info-sale-none"}">&#36; ${item.saleInfo?.retailPrice?.amount}</h2>
                                    <button class="btn_buy-now" type="button">buy now</button>
                                </div>
                            </div>`; 
                   
            console.log(item)
            showCaseBooks.innerHTML += books;    
        });  
        
          //console.log(resu);
        })
        .catch(() => { console.log('error') });
}

