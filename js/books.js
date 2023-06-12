
    const showCaseBooks = document.querySelector('.showecase-books');
    const btnLoadMore = document.querySelector('.btn_load-more');
    const linkCategoryBooks = document.querySelectorAll('.category-books_item');

    let querySubject = 'subject:Architecture';
    let startIndex = 0

    export function nextLoadBooks() {
        btnLoadMore.addEventListener('click', () => {
            startIndex += 6;
            resultRequest(); 
        });
    };

    export function nextCategoryBooks() {
        linkCategoryBooks.forEach((item, index) => {
            item.addEventListener('click', event => {
                let targetCategory = event.target.closest('.category-books_item');
                removeActiveCategory();
                targetCategory.classList.add('active');
            });
        });
    };

    function removeActiveCategory() {
        linkCategoryBooks.forEach(item => {
            if(item.classList.contains('active')){
                item.classList.remove('active');
            }
        });
    };

    function initRequest() {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${querySubject}&key=AIzaSyA6rzxK7JdhGxWOanC61q6X0V7Ya71YS8E&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict='en'`)
        .then((response) => {
       
            const result = response.json();  //запись нового promisa
          
            return result;
        })
        .then((data) => {

          return data
    
        })
        .catch(() => { console.log('error') });
}

export async function resultRequest() {
    const data = await initRequest();
    const dataItems = data.items;
    drawBooks(dataItems);
};


 function drawBooks(booksItems) {
    booksItems.forEach(item => {
        let books = `<div class="book-position">
                          <img class="${item.volumeInfo?.imageLinks?.thumbnail ? "book-position_image" : "book-position_image-none"}" src="${item.volumeInfo?.imageLinks?.thumbnail}" alt="foto book">
                          <div class="book-position_info">
                              <h2 class="book-position_info-author">${item.volumeInfo?.authors}</h2>
                              <h2 class="book-position_info-title">${item.volumeInfo?.title}</h2>
                              <div class="${item.volumeInfo?.averageRating ? "rating-block" : "rating-block-none"}">
                                  <div class="${item.volumeInfo?.averageRating ? "rating-block_stars" : ""}">
                                      <div class="${item.volumeInfo?.averageRating === 1 ? "rating-block_stars__one" : ""}">
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__grey"></div>
                                          <div class="rating-block_stars__grey"></div>
                                          <div class="rating-block_stars__grey"></div>
                                          <div class="rating-block_stars__grey"></div>
                                      </div>
                                      <div class="${item.volumeInfo?.averageRating === 2 ? "rating-block_stars__two" : ""}">
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__grey"></div>
                                          <div class="rating-block_stars__grey"></div>
                                          <div class="rating-block_stars__grey"></div>
                                      </div>
                                      <div class="${item.volumeInfo?.averageRating === 3 ? "rating-block_stars__three" : ""}">
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__grey"></div>
                                          <div class="rating-block_stars__grey"></div>
                                      </div>
                                      <div class="${item.volumeInfo?.averageRating === 4 ? "rating-block_stars__four" : ""}">
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__grey"></div>
                                      </div>
                                      <div class="${item.volumeInfo?.averageRating === 5 ? "rating-block_stars__five" : ""}">
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                          <div class="rating-block_stars__yellow"></div>
                                      </div>
                                  </div>
                                  <h2 class="${item.volumeInfo?.ratingsCount ? "rating-block_count" : "rating-block_count-none"}">${item.volumeInfo?.ratingsCount} review</h2>
                              </div>
                              <h2 class="${item.volumeInfo?.description ? "book-position_info-description" : "book-position_info-description-none"}">${item.volumeInfo?.description}</h2>
                              <h2 class="${item.saleInfo?.retailPrice?.amount ? "book-position_info-sale" : "book-position_info-sale-none"}">&#36; ${item.saleInfo?.retailPrice?.amount}</h2>
                              <button class="btn_buy-now" type="button">buy now</button>
                          </div>
                      </div>`; 
      console.log(item)
      showCaseBooks.innerHTML += books;
    });
    return booksItems;
 }

