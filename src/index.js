import { templates } from './js/templates';
import './styles.css';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const changeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body')


handleCheckTheme();
changeRef.addEventListener('change', onButtonClick)
function onButtonClick() {
    if (changeRef.checked === true) {
        bodyRef.classList.remove('light-theme');
        bodyRef.classList.add('dark-theme');
        localStorage.setItem('Theme', Theme.DARK)


    }
    if (changeRef.checked === false) {
        bodyRef.classList.remove('dark-theme');
        bodyRef.classList.add('light-theme');
        localStorage.setItem('Theme', Theme.LIGHT)

    }
};
function handleCheckTheme() {
    const value = localStorage.getItem('Theme')
    if (value === 'dark-theme') {
        changeRef.checked = true;
        bodyRef.classList.add('dark-theme');
    }
}


