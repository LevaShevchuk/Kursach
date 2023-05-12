var items = document.getElementsByClassName('goback');
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
      history.back();
      return false;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('.toTop');
    window.addEventListener('scroll', function () {
        if (pageYOffset > 100) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });
});

var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

$(document).ready(function(){
    $('.letter-links').click(function(){
     id='#body'+$(this).attr("id").substr(2);
     $(id).slideToggle('normal');
     return false;
    });
   });

   $('button').on('click', function(){
    if($(this).hasClass('selected') && $(this).prop('disabled') == false){
        $(this).removeClass('selected');
    }
    else{
        $(this).addClass('selected');
    }
});