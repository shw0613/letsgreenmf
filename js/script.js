// 탑 고정
$('#top').hide();

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 122) {
    $('#top').fadeIn();
  } else {
    $('#top').fadeOut();
  }
});

// 업버튼
$('#up_btn_box').hide();

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 500) {
    $('#up_btn_box').fadeIn();
  } else {
    $('#up_btn_box').fadeOut();
  }
});

// 스크롤 애니메이션
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 800) {
    $('.underline').addClass('underline_ani');
  } else {
    $('.underline').removeClass('underline_ani'
    );
  }
  if (height > 800) {
    $('.circle').addClass('circle_ani');
  } else {
    $('.circle').removeClass('circle_ani'
    );
  }
  if (height > 2000) {
    $('.title_bg').addClass('title_ani');
  } else {
    $('.title_bg').removeClass('title_ani'
    );
  }
  if (height > 2550) {
    $('.line01').addClass('line_ani');
  } else {
    $('.line01').removeClass('line_ani'
    );
  }
  if (height > 3300) {
    $('.line02').addClass('line_ani');
  } else {
    $('.line02').removeClass('line_ani'
    );
  }
  if (height > 3900) {
    $('.line03').addClass('line_ani');
  } else {
    $('.line03').removeClass('line_ani'
    );
  }
  if (height > 4300) {
    $('.title_bg2').addClass('title_ani2');
  } else {
    $('.title_bg2').removeClass('title_ani2'
    );
  }
  if (height > 5700) {
    $('.title_bg3').addClass('title_ani');
  } else {
    $('.title_bg3').removeClass('title_ani'
    );
  }
  if (height > 5700) {
    $('.title_bg4').addClass('title_ani');
  } else {
    $('.title_bg4').removeClass('title_ani'
    );
  }
});

// 업버튼 스크롤
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
  $('html, body').animate({
  scrollTop: target.offset().top
  }, 500);//움직이는 시간 조정
  return false;
  }
  }
  });
  });
