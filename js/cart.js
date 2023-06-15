import {allBooks, cartBooks} from './books';

let id = '';
let buttonBuy = '';

export function addToCart() {             // меняем состояние кнопки и перпеключаем класс
    let buttonsBuyNow = document.querySelectorAll('.btn_buy-now');
    buttonsBuyNow.forEach((item) => {

        item.addEventListener('click', event => {
            let countBooks = document.querySelector('.nav-info_cart-flag'); //находим поле для счётчика в корзине
            buttonBuy = event.target.closest('.btn_buy-now');          //находим кнопку buy now
            buttonBuy.classList.toggle('btn_in_the_cart') 
           
                if(buttonBuy.classList.contains('btn_in_the_cart')) {     //меняем название кнопки от состояния 
                    buttonBuy.innerText = 'In the cart';
                    saveBooks(event);
                    countBooks.innerText = cartBooks.length;             //переключаем значение счётчика
                }else{
                    buttonBuy.innerText = 'buy now';
                    removeCart(event);
                    countBooks.innerText = cartBooks.length;
            };
        });
    });
};

function removeCart(ev) {                     //удаляем из карзины книгу
    for( let i = 0; i < allBooks.length; i++){
        let resultForremove = allBooks[i];           //идём к значению id
        
        resultForremove.forEach(item => {
            id = item.id;  //находим id

                if(id == ev.target.dataset.btnbuy) {     //сравниваем id кнопки и id книги
                    cartBooks.forEach((item, index) => {
                        if(item.id == id) {
                        cartBooks.splice(index, 1);   //удаляем книгу из корзины по id
                    }
                });
            localStorage.setItem('inCart', JSON.stringify(cartBooks));  // в Local
            };
        });
    };
};

function saveBooks(ev) {                    //сохраняем в Local карзину
    if(!ev.target.dataset.btnbuy) {
        return;
    }
    for( let i = 0; i < allBooks.length; i++){
        let resultForadd = allBooks[i];                 //идём к id

        resultForadd.forEach(item => {
            id = item.id;                             //находим id

                if(id == ev.target.dataset.btnbuy) {          //сравниваем id кнопки и id книги
                    let found = resultForadd.find(element => element.id === id);    //ищем книгу по id
                    cartBooks.push(found)                                          //добавляем книгу в корзину
                    localStorage.setItem('inCart', JSON.stringify(cartBooks));    // в Local
                };
            });
        };
    };

