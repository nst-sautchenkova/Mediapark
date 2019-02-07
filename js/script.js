jQuery(document).ready(function() {
	var w = jQuery(window).width();
	if (w <= 1250) {
		var swiper = new Swiper('#stage', {
			scrollbar: '.swiper-scrollbar',
			scrollbarHide: true,
			slidesPerView: 5,
			centeredSlides: false,
			mousewheelControl: true,
			breakpoints: {
				1024: {
					slidesPerView: 4
				},
				768: {
					slidesPerView: 3
				},
				640: {
					slidesPerView: 3
				},
				420: {
					slidesPerView: 2
				}
			}
		});
		
		
		
	}
});
jQuery(document).ready(function() {
	var q = jQuery(window).width();
	if (q <= 740) {
		var swiper = new Swiper('.services', {
			scrollbar: '.swiper-scrollbar',
			scrollbarHide: true,
			slidesPerView: 2,
			centeredSlides: false,
			mousewheelControl: true,
			breakpoints: {
				420: {
					slidesPerView: 1
				}
			}
		});
	}
});

jQuery(document).ready(function() {
	var e = jQuery(window).width();
	if (e <= 900) {
		jQuery(document).ready(function() {
			$('.special-offers-item a.link').css({display: 'none'});
			jQuery('.special-offers-item').on('click', function() {
				$(this).toggleClass('show');
			});
		})
	}
});



//pop-up feedback
jQuery(document).ready(function() {
	$('.feedback').click(function(){
    if ($('#feedback').hasClass('open')) {
        $('#feedback').removeClass('open');
		$('#feedback').css({'display': 'none'});
        $('#feedback').stop().animate({opacity: '0'}, 400, function() {});
		$('#feedback center').animate({top: '0'}, 400, function() {});
		$('.wrapper').removeClass('open-f');
    } else {
        $('#feedback').addClass('open');
		$('.wrapper').addClass('open-f');
		$('#feedback').css({'display': 'block'});
        $('#feedback').stop().animate({opacity: '1'}, 400, function() {});
		$('#feedback center').animate({top: '50%'}, 400, function() {});
    }
});

//pop-up brief
$('.brief').click(function(){
    if ($('#brief').hasClass('open')) {
        $('#brief').removeClass('open');
		$('#brief').css({'display': 'none'});
        $('#brief').stop().animate({opacity: '0'}, 400, function() {});
		$('#brief center').animate({top: '0'}, 400, function() {});
		$('.wrapper').removeClass('open-f');
    } else {
        $('#brief').addClass('open');
		$('.wrapper').addClass('open-f');
		$('#brief').css({'display': 'block'});
        $('#brief').stop().animate({opacity: '1'}, 400, function() {});
		$('#brief center').animate({top: '50%'}, 400, function() {});
    }
});
$('.pop-up .close').click(function(){
    if ($('.pop-up').hasClass('open')) {
        $('.pop-up').removeClass('open');
		$('.pop-up').css({'display': 'none'});
		$('.pop-up center').animate({top: '0'}, 400, function() {});
        $('.pop-up').stop().animate({opacity: '0', 'display': 'none'}, 400, function() {});
		$('.wrapper').removeClass('open-f');
		
    } 
});
});


[].slice.call( document.querySelectorAll( 'button.progress-button' ) ).forEach( function( bttn ) {
	new ProgressButton( bttn, {
		callback : function( instance ) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + Math.random() * 0.1, 1 );
					instance._setProgress( progress );

					if( progress === 1 ) {
						instance._stop(1);
						clearInterval( interval );
					}
				}, 50 );
		}
	} );
} );

//form
document.getElementById("tel").onkeypress= function(event){
		event= event || window.event;
		if (event.charCode && (event.charCode < 48 || event.charCode > 57))
		return false;
	};

	function checkParams() {
    var tel = $('#tel').val();
    var email = $('#email').val();
	var name = $('#name').val();
	
    if((tel.length != 0) && (name.length != 0)){
        $('#button-tel').removeAttr('disabled');
    } else {
        $('#button-tel').attr('disabled', 'disabled');
		}
		
	if(email.length != 0) {
        $('#button-email').removeAttr('disabled');
    } else {
        $('#button-email').attr('disabled', 'disabled');
		}
	}
	
//scroll	
$(document).ready(function(){
    $("#scroll-a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});


$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
});


function func() {
  $('.js-anim').addClass('animation-time');
}
setTimeout(func, 1000);