const loader = document.getElementById('loader')

window.onload = function(){
    loader.classList.add('active-loader')
    setTimeout(() =>{
        loader.classList.remove('active-loader')
    },6500)
}



const sidebarlogo = document.getElementById('sidebar-logo')
const sidebar = document.getElementById('sidebar')
const clickbtn = document.querySelector('.click')

sidebarlogo.onclick = function(){
    sidebar.classList.add('active');
}
clickbtn.onclick = function(){
    sidebar.classList.remove('active')
}


const toTopScroll = document.getElementById('scrollToTop');
toTopScroll.addEventListener('click', () =>{
    scrollTo(0,0);
})

const plus = document.querySelectorAll('.plus')
const childDrp = document.querySelectorAll('.child-dropdown')

for(let i = 0; i<= plus.length; i++ ){
    plus[i].onclick = function(){
      
        plus[i].classList.toggle('plusdeg')
        childDrp[i].classList.toggle('openDrp')
    }
    
}   


