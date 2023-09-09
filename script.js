let MenuButton=document.getElementById("MenuButton");

MenuButton.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

let typed= new Typed('.auto-input',{
    strings:['Front-end Developer!','Java Developer!','Coder!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
});


// let navLinks=document.querySelectorAll('nav ul li  a');
let navLinks=document.querySelectorAll('header');
let sections=document.querySelectorAll('section');
console.log(sections);
console.log(navLinks);


window.addEventListener('scroll',function(){
    const scrollPos=window.scrollY + 20
    sections.forEach(section =>{
        if(scrollPos>section.offsetTop && scrollPos<(section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id')==link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});