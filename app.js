
document.getElementById('menu-bar').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('The Dream');
    document.getElementById('side-menu').style.width="300px";
    document.getElementById('main-menu').style.marginLeft="300px";
})

document.querySelector('.close').addEventListener('click',()=>{
    console.log('close');
    document.getElementById('side-menu').style.width="0";
    document.getElementById('main-menu').style.marginLeft="0";

})

// const openSlideMenu =()=>{
//     document.getElementById('side-menu').style.width="300px";
//     document.getElementById('main-menu').style.marginLeft="300px";
// }