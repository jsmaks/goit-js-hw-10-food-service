import itemsTemplate from '../tempates/gallery-items.hbs'
import menu from '../menu.json'

const menuRef = document.querySelector('.js-menu')
const menuGallery = itemsTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', menuGallery)

console.log(menuGallery);