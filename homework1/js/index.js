console.log('got there');

const tabBtns = [...document.getElementById('tab-btns').children];
const tabContents = [...document.getElementById('tab-contents').children];

const activeBtnClass = 'tools__item--choosed';
const activeContentClass = 'tools__page-builder--choosed';

const clearClass = () => {
    tabBtns.forEach(btn => {
        btn.classList.remove(activeBtnClass);
    })
    tabContents.forEach(content => {
        content.classList.remove(activeContentClass);
    })
}

const activateTab = (btn, content) => {
    clearClass();
    btn.classList.add(activeBtnClass)
    content.classList.add(activeContentClass)
}

activateTab(tabBtns[0], tabContents[0]);

tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        activateTab(btn, tabContents[index]);
    })
});