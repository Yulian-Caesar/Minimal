$(function(){
	$('.menu-toggle-phone').click(function(){
		$('.nav-tab-list').slideToggle(400)
	})
	$('.menu-toggle').click(function(){
		$('.menu').slideToggle(400)
	})
	$('a[data-target^="anchor"]').bind('click.smoothscroll',function (e) {
		e.preventDefault(e);

		var target = $(this).attr('href'),
		$target = $(target);

		$('html,body').stop().animate({
			   'scrollTop': $target.offset().top
		}, 900);
	});
	$('.home-slider').slick({
		arrows:false,
		dots:true,
	})
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});
	$('.portfolio-slider').slick({
		arrows:true,
		dots:true,
		appendArrows: '.slider-arrows',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
	})
	
});
  function initMap() {
    var coordinates = {lat: -37.806006, lng: 144.961291}, // Координаты центра карты 
        markerImg = 'img/company.png', //  Иконка для маркера  
   
    // создаем карту и настраеваем 
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 16, // определяет первоначальный масштаб
        disableDefaultUI: true, // убирает элементы управления
        scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).
     
    });

    // маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера 
        map: map, //  ставим маркер в карту с id map
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });
    // маркер по центру при resize
     google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);

    });
}

// Запускаем карту при загрузки страницы
google.maps.event.addDomListener(window, 'load', initMap);