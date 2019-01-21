// Всплывающие подсказки для полей форм (обработка Title)
$( function() {
  $( document ).tooltip();
} );

// Отрисовка календаря
$( function() {
  $( "#datepicker" ).datepicker({
    showOn: "button",
    buttonImage: "calendar.png",
    buttonImageOnly: true,
    buttonText: "Дата",
    dateFormat: "dd-mm-yy",
    dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
    firstDay: 1,
    monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ]
  });
});

// Выбор города: загрузка из файла .json и отрисовка автозаполнения городов
$(document).ready(() => {
  let autoCitys = [];
  $.ajax({
    url: "regions.json",
    dataType: "json",
    success: (data, Status) => {
        for (let i of data){
            autoCitys.push(i.city);
        };            
    }
  });
    $( "#region_cities" ).autocomplete({source: autoCitys});
});


// Всплывающее окно-подсказка
$( function() {  
  $( "#dialog" ).dialog({
    autoOpen: false,
    open: {
      effect: "blind",
      duration: 1000,
      height: 400,
      width: 350
    },
    hide: {
      effect: "fade",
      duration: 1000
    }
  });

// Обработка события "Всплывающее окно-подсказка"
$( "#submit" ).on( "click", function() {
  $( "#dialog" ).dialog( "open" );
  });
} );  