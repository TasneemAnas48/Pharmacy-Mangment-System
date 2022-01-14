// function openNav() {
//     var open = document.getElementById("sidebar");
//     open.classList.remove("active");
//     // document.getElementById("mySidenav").style.width = "250px";
//     // document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//     var close = document.getElementById("sidebar");
//     close.classList.add("active");
//     // document.getElementById("mySidenav").style.width = "150px";
//     // document.getElementById("main").style.marginLeft = "75px";
// }


var color_header = document.getElementsByClassName("option-name");

color_header.onclick = function () {
    'use strict';
    color_header.style.backgroundColor = "#17a2b8";
    color_header.style.color = "#f1f1f1";
    color_header.style.boxShadow = "0 0 10px 1px #17a2b863";
};



// var ul_option = document.getElementById("sidebar-content");

// var option = ul_option.getElementsByClassName("option-icon");

// for (i = 0; i < option.length; i++){
//     option[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//     });
// }



// var option_list = document.getElementsByClassName("option-name");
// var mydiv1 = document.getElementById("option1");
// var mydiv2 = document.getElementById("option2");
// var mydiv3 = document.getElementById("option3");
// var mydiv4 = document.getElementById("option4");


// for (i = 0; i < option_list.length; i++) {
//     option_list[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     mydiv1.children[1].classList.toggle("active");
// });
// }


// $(document).ready(function () {
//     $('#sidebarCollapse').on('click', function () {
//         $('.sidebar').toggleClass('active');
//     });
// });

// var input_focus = document.getElementsByClassName("form-control");
// input_focus.onfocus = function(){
//     this.placeholder = "hello";
// }


        // Scroll To Top Button
        mybutton = document.getElementById("myBtn");
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        function topFunction() {
            document.documentElement.scrollTop = 0;
            document.documentElement.behavior = "smooth";
        }

function myFunction() {
    document.getElementById("myText").placeholder.style.color = "red";
}


$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#sidebar').toggleClass('active-mobile');
        $('#body-page').toggleClass('active');
        $('#navbar').toggleClass('active');
        $('#overlay').toggleClass('active');
        $('#user').toggleClass('active');
    });

});

$(document).ready(function () {

    $('#sidebar').hover(function () {
        $('#sidebar').toggleClass('hover');
        $('#body-page').toggleClass('hover');
        $('#navbar').toggleClass('hover');
        $('#user').toggleClass('hover');
    });

});

$(document).ready(function () {

    $('.a-user').hover(function () {
        $('.fa-user-o').toggleClass('hover');
    });

    $('.a-edit').hover(function () {
        $('.fa-edit').toggleClass('hover');
    });

    $('.a-sign').hover(function () {
        $('.fa-sign-out').toggleClass('hover');
    });
});

/* responsive for mobile */
const $sidebar = $('#sidebar');
const $overlay = $('.overlay');

$(document).mouseup(e => {
    if (!$sidebar.is(e.target) && $sidebar.has(e.target).length === 0) {
        $sidebar.removeClass('active-mobile');
        $overlay.removeClass('active');
    }
});





var icon_toggle = document.getElementById("sidebarCollapse");
icon_toggle.onclick = function () {
    if (icon_toggle.firstElementChild.classList.contains("glyphicon-align-left")) {
        icon_toggle.firstElementChild.classList.remove("glyphicon-align-left");
        icon_toggle.firstElementChild.classList.add("glyphicon-align-right");
    }
    else {
        icon_toggle.firstElementChild.classList.remove("glyphicon-align-right");
        icon_toggle.firstElementChild.classList.add("glyphicon-align-left");
    }
}


// var branch_icon = document.getElementById("btn-branch");
// var icon_up_down = branch_icon.childNodes[1].firstElementChild;
// console.log(icon_up_down.classList);
// branch_icon.onclick = function() {
//     if (icon_up_down.classList.contains("fa-angle-up")) {
//         icon_up_down.classList.removeClass("fa-angle-up");
//         icon_up_down.classList.addClass("fa-angle-down");
//     }
// }


/* Focus input */
$('.input').each(function () {
    $(this).on('blur', function () {
        if ($(this).val().trim() != "") {
            $(this).addClass('has-val');
        }
        else {
            $(this).removeClass('has-val');
        }
    })
})


// start select
for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select2').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select2').classList.toggle('open');
    })
}
window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select2')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});
// end select

$(document).ready(function() {
    var table = $('#table').DataTable( {
        responsive: true
    });

    new $.fn.dataTable.FixedHeader( table );

});

//for select today date
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
// document.getElementById('InvoiceDate').placeholder = new Date().toDateInputValue();
document.getElementById('Date').value = new Date().toDateInputValue();


//for select

$(document).ready(function () {
    $('.selectpicker').selectpicker();
});


// $(document).ready(function () {

//     $('.btn-default').on('focus', function () {
//         $('.caret').classList.addClass('active-caret');
        
//     });

// });

// validation
$(document).ready(function () {
    $('.form-control').on('focus',function(){
        $('.needs-validation').removeClass('was-validated');
    })
});
