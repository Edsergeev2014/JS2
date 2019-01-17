class Menu {
    constructor(myId, myClass, myItems)
    {
        this.id = myId;
        this.className = myClass;
        this.items = myItems;
    }

    render () {
        var result = `<ul class="${this.className}" id="${this.id}">`;

        //Сами пункты меню
        for (var i = 0; i < this.items.length; i++){
            result += this.items[i].renderItem();
        }

        result += '</ul>';
        return result;
    }

    //TODO: удаление меню. Добавить общий для всех метод remove(), который удаляет соответствующий DOM-узел.
    remove(tagDel) {
        //console.log("В remove: ",tagDel); 
        if   (tagDel == null) alert("Такой тег не найден");
        tagDel.parentNode.removeChild(tagDel);
        return ;
    }
}

