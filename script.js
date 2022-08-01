let count = 0;
let count2;

// drop down DOM

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});



//load beranda  jQuery

$(window).on('load', function(){
    $('.atas').addClass('Muncul');
    $('.bawah').addClass('Muncul');

});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.text-jumbotron h1').css({
        'transform' : 'translate(0px,'+ wScroll*1.8 +'%)'
    })

    $('.text-jumbotron h4').css({
        'transform' : 'translate(0px,'+ wScroll*3.1 +'%)'
    })

    

    $('.jumbotron-img img').css({
        'transform' : 'translate(0px,'+ wScroll/4 +'%)'
    })

    //box

    if(wScroll > $('.retros-stuff').offset().top -50){
        $('.retros-stuff .box').each(function(i){
            setTimeout(function(){
                $('.retros-stuff .box').eq(i).addClass('muncul');
            },200 *(i+1));
        });
                       
    }

    if(wScroll > $('.retros-stuff').offset().top -50){
        $('.retros-stuff .container-image-main').addClass('downImg');                  
    }

    if(wScroll > $('.nostalgia').offset().top -50){
        $('.nostalgia .divr').each(function(i){
            setTimeout(function(){
                $('.nostalgia .divr').eq(i).addClass('geser');
            },200 *(i+1));
        });
                       
    }

    if(wScroll > $('.nostalgia').offset().top -50){
        $('.nostalgia .divl').each(function(i){
            setTimeout(function(){
                $('.nostalgia .divl').eq(i).addClass('geser');
            },300 *(i+1));
        });
                       
    }

    if(wScroll > $('nav').offset().top){
        console.log('ok');
        $('nav').addClass('fix');
                       
    }

    if(wScroll < $('.beranda').offset().top){
        console.log('bawah');
        $('nav').removeClass('fix');
                       
    }



});

$('.page-scroll').on('click', function(e){

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

   $('html').animate({
    scrollTop: elemenTujuan.offset().top -50
   }, 1350, 'easeInOutQuint');

    e.preventDefault();


});

$('.comunity .sub').on({
    mouseenter: function(){
        $('.comunity .sub').addClass('up');
    },
    mouseleave: function(){
        $('.comunity .sub').removeClass('up');
    }
});

$('.nostalgia .kartun').on({
    mouseenter: function(){
        $('.nostalgia .kartun').addClass('zoom');
    },
    mouseleave: function(){
        $('.nostalgia .kartun').removeClass('zoom');
    }
});


$('.nostalgia .jajanan').on({
    mouseenter: function(){
        $('.nostalgia .jajanan').addClass('zoom');
    },
    mouseleave: function(){
        $('.nostalgia .jajanan').removeClass('zoom');
    }
});

$('.nostalgia .kendaraan').on({
    mouseenter: function(){
        $('.nostalgia .kendaraan').addClass('zoom');
    },
    mouseleave: function(){
        $('.nostalgia .kendaraan').removeClass('zoom');
    }
});

$('.nostalgia .film').on({
    mouseenter: function(){
        $('.nostalgia .film').addClass('zoom');
    },
    mouseleave: function(){
        $('.nostalgia .film').removeClass('zoom');
    }
});

$('.nostalgia .musik').on({
    mouseenter: function(){
        $('.nostalgia .musik').addClass('zoom');
    },
    mouseleave: function(){
        $('.nostalgia .musik').removeClass('zoom');
    }
});

$('.nostalgia .outfit').on({
    mouseenter: function(){
        $('.nostalgia .outfit').addClass('zoom');
    },
    mouseleave: function(){
        $('.nostalgia .outfit').removeClass('zoom');
    }
});


const container = document.querySelector('.container-retro');
const jumbo = document.querySelector('.main-img');
const pic = document.querySelectorAll('.gambar');
const big = document.querySelector('.container-image-main');
const overlay = document.querySelector('.retro-all-container');
const overImg = document.querySelector('.overlay');
const overcont = document.querySelector('.over-containt');
const overX = document.querySelector('.gambarrt');
const left = document.querySelector('.lefPath');
const right = document.querySelector('.rightPath');




container.addEventListener('click', function(e) {
   
    if(e.target.className == 'gambar') {
        jumbo.src = e.target.src;

        if(jumbo.src === pic[3].src){      
       jumbo.style.height ="150%";
       jumbo.style.bottom = "37%";
    }else if(jumbo.src === pic[5].src){        
        jumbo.style.height ="200%";
        jumbo.style.bottom = "50%";
    }else if(jumbo.src === pic[7].src){        
        jumbo.style.height ="175%";
        jumbo.style.bottom = "5px";
    }else if(jumbo.src === pic[8].src){   
        jumbo.style.height ="165%";
        jumbo.style.bottom = "50%";
    }else if( jumbo.src === pic[9].src){       
        jumbo.style.height ="180%";       
        jumbo.style.bottom = "10px";
    }else if(jumbo.src === pic[0].src){       
            jumbo.style.height ="200%";
            jumbo.style.bottom = "50%";            
    }else{       
        jumbo.style.height ="inherit";
        jumbo.style.bottom = "0px";
        
    }

          
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500)
        
        pic.forEach(function(thumb) {
            thumb.className = 'gambar';
        });
        e.target.classList.add('active');
        
    }

    const kon = jumbo.src;
    console.log(kon);

    
    e.target.className
    
    for(let i = 0; i < pic.length; i++){
        if(pic[i].src == jumbo.src){
            count=i;
        }
    }

    console.log(count);

    
       

});




big.addEventListener('click', function(e){
   
    if(e.target.className == 'main-img'){        
        overcont.innerHTML ='<div class ="overlay" > <div class="leftArrow"><img class="leftPath" src="img/leftArrow.png" alt=""></div> <div class="sub-overlay"><img class="close"src="img/close.png" alt=""><img id="jumbo2" class="gambarrt" src="'+jumbo.src+'" alt=""></div><div class="rightArrow"><img class ="rightPath"src="img/rightArrow.png" alt=""></div></div>';
    }
    

});


overcont.addEventListener('click', function(e){
     let idx = count;

    if(e.target.className == 'close'){
        overcont.innerHTML ='';
    }

    if(e.target.className == 'leftPath'){
        idx-=1;
               
        if(idx<0){
            idx=9;
            }
            jumbo.src = pic[idx].src;
             
        
       
        
        overcont.innerHTML ='';
        overcont.innerHTML ='<div class ="overlay" > <div class="leftArrow"><img class="leftPath" src="img/leftArrow.png" alt=""></div> <div class="sub-overlay"><img class="close"src="img/close.png" alt=""><img class="gambarrt" src="'+pic[idx].src+'" alt=""></div><div class="rightArrow"><img class ="rightPath"src="img/rightArrow.png" alt=""></div></div>';
       
    }

    if(e.target.className == 'rightPath'){
        idx+=1;
       
        console.log(idx);
        if(idx>9){
            idx=0;
        }
        jumbo.src = pic[idx].src;    
    overcont.innerHTML = '';
    overcont.innerHTML = '<div class ="overlay" > <div class="leftArrow"><img class="leftPath" src="img/leftArrow.png" alt=""></div> <div class="sub-overlay"><img class="close"src="img/close.png" alt=""><img class="gambarrt" src="'+pic[idx].src+'" alt=""></div><div class="rightArrow"><img class ="rightPath"src="img/rightArrow.png" alt=""></div></div>';

    }

    if(jumbo.src === pic[3].src){       
       jumbo.style.height ="150%";
       jumbo.style.bottom = "37%";

    }else if(jumbo.src === pic[5].src){       
        jumbo.style.height ="200%";
        jumbo.style.bottom = "50%";
    }else if(jumbo.src === pic[7].src){       
        jumbo.style.height ="175%";
        jumbo.style.bottom = "5px";
    }else if(jumbo.src === pic[8].src){    
        jumbo.style.height ="165%";
        jumbo.style.bottom = "50%";
    }else if( jumbo.src === pic[9].src){        
        jumbo.style.height ="180%";    
        jumbo.style.bottom = "10px";
    }else if(jumbo.src === pic[0].src){       
            jumbo.style.height ="200%";
            jumbo.style.bottom = "50%";        
    
    }else{        
        jumbo.style.height ="inherit";
        jumbo.style.bottom = "0px";
        
    }
   
}); 














