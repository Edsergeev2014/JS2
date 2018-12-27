//Класс для пункта меню
class MenuItem {
    constructor(id, href, title)
    {
        this.id = id;
        this.href = href;
        this.title = title;
    }

    //Метод возвращает html код для конкретного пункта
    renderItem () {
        //return '<li><a href="' + this.href + '">' + this.title + '</a></li>'; //ES5
        return `<li><a id="${this.id}" href="${this.href}">${this.title}</a></li>`; //ES6
        
    }
}