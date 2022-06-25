const menuBar=document.querySelector('.fa-bars');
const closeNav=document.querySelector('.fa-multiply');
const links=document.querySelector('.links');


 menuBar.addEventListener('click',()=>{
    links.style.display='block';
    closeNav.style.display='block';
    menuBar.style.display='none';

 })
 closeNav.addEventListener('click',()=>{
    links.style.display='none';
    closeNav.style.display='none';
    menuBar.style.display='block';
 })