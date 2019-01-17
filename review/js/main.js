$(document).ready(function () {
    //Контейнер с товарами - отзывами
    let $goodsContainer = $('#goods');

    //Создаем товары - отзывы
    let good1 = new Good(1, 'Текст отзыва 1');
    good1.render($goodsContainer);

    let good2 = new Good(2, 'Текст отзыва 2');
    good2.render($goodsContainer);

    //Создаем экземпляр корзины - Список отзывов на одобрение
    let basket = new Basket('basket');
    basket.render($('.basket_wrapper'));

    //Добавление товара в корзину - добавление нового отзыва в список на одобрение
    $('.buygood').on('click', function () {
        let idProduct = parseInt($(this).attr('data-id'));
        let price = parseInt($(this).parent().find('.product-price').text());

        basket.addProduct(idProduct, price);
    });

    //TODO: Удаление товара из корзины - Удаление отзыва из списка
    $('.delgood').on('click', function () {
        let idProduct = parseInt($(this).attr('data-id'));

        basket.remove(idProduct);
    });


});