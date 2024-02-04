const menuIcon = document.querySelector('.burger_bottom');
const arrowIcon = document.querySelector('.arrow_more');
const bodyHidden = document.body;
const arrowFilter = document.querySelector('.arrow_filter');
if (menuIcon) {
    const menuBody = document.querySelector('.burger_list');
    menuIcon.addEventListener('click', () => {
        menuBody.classList.toggle('open');
        menuIcon.classList.toggle('open');
        bodyHidden.classList.toggle('open');
    });
}
if (arrowIcon) {
    const addCatalog = document.querySelector('.add_catalog');
    arrowIcon.addEventListener('click', () => {
        addCatalog.classList.toggle('open');
        arrowIcon.classList.toggle('open');
    })
}
if (arrowFilter) {
    const filter = document.querySelector('.filter');
    const mobileFilter = document.querySelector('.mobile_filter');
    arrowFilter.addEventListener('click', () => {
        filter.classList.toggle('open');
        mobileFilter.classList.toggle('open');
        arrowFilter.classList.toggle('open');
    })
}

const nav = document.querySelector('.header_top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#eee';
        nav.style.setProperty('--shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25)');
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});