const menuIcon = document.querySelector('.burger_bottom');
const arrowIcon = document.querySelector('.arrow_more');
if (menuIcon) {
    const menuBody = document.querySelector('.burger_list');
    menuIcon.addEventListener('click', () => {
        menuBody.classList.toggle('open');
        menuIcon.classList.toggle('open');
    });
}
if(arrowIcon){
    const addCatalog = document.querySelector('.add_catalog');
    arrowIcon.addEventListener('click',()=>{
        addCatalog.classList.toggle('open');
        arrowIcon.classList.toggle('open');
    })
}