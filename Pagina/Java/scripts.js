jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon'),
    menu=$('.navegation ul');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else
        {
            menu.addClass('show');
        }
        
    });

});

document.querySelectorAll('.galeria img').forEach(Image =>{
    Image.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = Image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}