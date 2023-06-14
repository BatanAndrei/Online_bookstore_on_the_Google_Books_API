import {allBooks, cartBooks} from './books';

let id = '';

export function addToCart() {             // меняем состояние кнопки и перпеключаем класс
    let buttonsBuyNow = document.querySelectorAll('.btn_buy-now');
    buttonsBuyNow.forEach((item) => {
        item.addEventListener('click', event => {
            let buttonBuy = event.target.closest('.btn_buy-now');
            buttonBuy.classList.toggle('btn_in_the_cart') 
           
                if(buttonBuy.classList.contains('btn_in_the_cart')) {
                    buttonBuy.innerText = 'In the cart';
                    saveBooks(event);
                }else{
                    buttonBuy.innerText = 'buy now';
                    removeCart(event);
            };
        });
    });
};

function removeCart(ev) {
    for( let i = 0; i < allBooks.length; i++){
        let resultForremove = allBooks[i];
        resultForremove.forEach(item => {
            id = item.id;
            if(id == ev.target.dataset.btnbuy) {

                cartBooks.forEach((item, index) => {
                    if(item.id == id) {
                        cartBooks.splice(index, 1);
                }
            });
            localStorage.setItem('inCart', JSON.stringify(cartBooks));
        };
    });
};
};

function saveBooks(ev) {
    if(!ev.target.dataset.btnbuy) {
        return;
    }
    //let bookInCart = JSON.parse(localStorage.getItem('inCart'));
    for( let i = 0; i < allBooks.length; i++){
        let resultForadd = allBooks[i];
        resultForadd.forEach(item => {
            id = item.id;
            if(id == ev.target.dataset.btnbuy) {
                let found = resultForadd.find(element => element.id === id);
                cartBooks.push(found)
                localStorage.setItem('inCart', JSON.stringify(cartBooks)); 
            };
        });
    };
};

