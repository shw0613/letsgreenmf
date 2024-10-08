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

// 아코디언
const btns = document.querySelectorAll(".faq__btn");

            btns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    const faqItem = btn.parentNode;
                    const isActive = faqItem.classList.contains("active");

                    removeActiveClasses();

                    if (!isActive) {
                        faqItem.classList.add("active");
                    }
                });
            });

            function removeActiveClasses() {
                btns.forEach((btn) => {
                    btn.parentNode.classList.remove("active");
                });
            }