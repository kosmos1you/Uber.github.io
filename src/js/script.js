window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    mobmenu = document.querySelector('.mobmenu');

    mobmenu.addEventListener('click', () => {
        mobmenu.classList.toggle('mobmenu_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            mobmenu.classList.toggle('mobmenu_active');
            menu.classList.toggle('menu_active');
        })
    })
})