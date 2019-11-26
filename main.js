//Index.html
$('#control-btn').on('click', function(){
    $('#menu-list').slideToggle();

    if ($('#control-btn').hasClass('close')) {
        $('#control-btn').attr('src', 'ressources/images/flatIcon/menu-cross.svg');
        $('#control-btn').removeClass('close')
        $('#control-btn').addClass('open')
    } else if($('#control-btn').hasClass('open'))  {
        $('#control-btn').attr('src', 'ressources/images/flatIcon/menu-bar.svg');
        $('#control-btn').removeClass('open')
        $('#control-btn').addClass('close')
    }
})


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

// //Profil.html
// function openSidebar(){
//     document.getElementById("sidebar").style.display= "block";
//     document.getElementById("btn-sidebar").style.display= "none";
// }

// function closeSidebar(){
//     document.getElementById("sidebar").style.display= "none";
//     document.getElementById("btn-sidebar").style.display= "block";

// }

