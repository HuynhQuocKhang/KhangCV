var header = document.getElementById('nav');
var header2 = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
mobileMenu.onclick=function(){
    var isClose = header.clientHeight === 35;
    if(isClose){
        header2.style.height='auto'
        header.style.height='auto';
        header.style.overflow='none';
    }
    else{
        header.style.height='35px';
    }
}

var menu = document.querySelectorAll('#nav li a[href*="#"]')
for(var i=0;i<menu.length;i++)
{
    var menuItem = menu[i];
    menuItem.onclick=function(){
        header.style.height='35px';

    }
}
