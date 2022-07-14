;(function getNum(selectorTitle){
    let blockTitle = document.querySelectorAll(selectorTitle);
    let count = 1;
    for (elem of blockTitle) {
        elem.setAttribute('data-count', count++ + '.')
    }
})('.block_title');