
/*-----------------LOADER--------------*/

// const loader = document.getElementById('loader')

// window.onload = function(){
//     loader.classList.add('active-loader')
//     setTimeout(() =>{
//         loader.classList.remove('active-loader')
//     },6500)
// }


/*-------------HEADER WINDOW SCROLL---------------*/






/*-----------------SIDEBAR LOGO CLICK------------*/


const sidebarlogo = document.getElementById('sidebar-logo')
const sidebar = document.getElementById('sidebar')
const clickbtn = document.querySelector('.click')

sidebarlogo.onclick = function(){
    sidebar.classList.add('active');
}
clickbtn.onclick = function(){
    sidebar.classList.remove('active')
}




/*---------TAB-MENU ---------------------*/

const btn= document.querySelectorAll('#tabs .item')
const button = document.querySelectorAll('.item .button')
const tabs = document.querySelectorAll('.all .tabs')

for(let i=0;  i < btn.length; i++){
    btn[i].onclick = function(){

        for(let j = 0; j <tabs.length; j++){
            tabs[j].classList.remove('active-tab')
        }
        
        let attr = this.getAttribute('data-btn')
        tabs[attr].classList.add('active-tab')
        
        
    }
}



/*----TAB-MENU in TAB-MENU   :)    ---------*/

const weekBtn = document.querySelector('#button-header');
const weekBtn2 = document.querySelector('#second-button-header')
const week = document.querySelector('#week-content');
const week2 = document.querySelector('#second-week-content');
// const week2 = document.querySelector('#week-content')[1]
const icon =  document.querySelector('.accardion-btn i');
const icon2 = document.querySelector('#second-icon');
weekBtn.onclick = () =>{
    week.classList.toggle('collapse-active');
    icon.classList.toggle('ico-active');
}
weekBtn2.onclick = () =>{
    week2.classList.toggle('collapse-active');
    icon2.classList.toggle('ico-active');
}

const header  = document.getElementById('header')

window.addEventListener('scroll', () =>{

    const scrollY = window.scrollY;
    if(scrollY >800){
       
    }
    else{
       
    }
})





/*----------------TO TOP SCROLL---------------*/

const toTopScroll = document.getElementById('scrollToTop');
toTopScroll.addEventListener('click', () =>{
    scrollTo(0,0);
})


$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


/*-------DROPDOWN CLICK--------------------*/
// const plus = document.querySelectorAll('.plus')
// const childDrp = document.querySelectorAll('.child-dropdown')

// for(let i = 0; i<= plus.length; i++ ){
//     plus[i].onclick = function(){
      
//         plus[i].classList.toggle('plusdeg')
//         childDrp[i].classList.toggle('openDrp')
//     }
    
// }

















