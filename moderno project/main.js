function subMenu(){
    const burgerMenu = document.querySelector('.burger-menu');
    const subMenu = document.querySelector('.sub-menu');
    burgerMenu.addEventListener('click', ()=>{
        subMenu.style.cssText=`
            display:block;
        `
    })
    const times = document.querySelector('.fa-times');
    times.addEventListener('click', ()=>{
        subMenu.style.cssText = `
            display:none;
        `;
    })
    console.log(times);
    
}
subMenu();