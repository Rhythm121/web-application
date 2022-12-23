burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('nav-list')
rightNav=document.querySelector('.rightNav')

burger.addEventListener('click', () => { 
rightNav.classlist.toogle('v-class-resp');
navList.classlist.toogle('v-class-resp');
navbar.classlist.toogle('h-nav-resp');
})
