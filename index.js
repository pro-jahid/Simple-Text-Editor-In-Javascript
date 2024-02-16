
const textArea = document.getElementById('text-field');

document.getElementById('bold').addEventListener('click', function(){
    textArea.classList.toggle('font-bold');
    this.classList.toggle('font-bold')
});

document.getElementById('italic').addEventListener('click', function(){
    textArea.classList.toggle('italic');
    this.classList.toggle('font-bold');
});

document.getElementById('underline').addEventListener('click', function(){
    textArea.classList.toggle('underline')
    this.classList.toggle('font-bold');
});

document.getElementById('align-left').addEventListener('click', function(){
    textArea.style.textAlign = 'left';
});
document.getElementById('align-center').addEventListener('click', function(){
    textArea.style.textAlign = 'center';
});
document.getElementById('align-right').addEventListener('click', function(){
    textArea.style.textAlign = 'right';
});
document.getElementById('align-justify').addEventListener('click', function(){
    textArea.style.textAlign = 'justify';
});
document.getElementById('font-size').addEventListener('click', function(){
    const fontSize = this.value;
    textArea.style.fontSize = `${fontSize}px`;
});

document.getElementById('color-value').addEventListener('input', function(){
    const colorValue = this.value;
    textArea.style.color = colorValue;
});

let activeIndex = null;
const alignItems = document.getElementById('align-control');

function handleListClick(event) {
const clickedItem = event.target;

if (clickedItem.classList.contains('item-click')) {
    const currentIndex = Array.from(clickedItem.parentNode.children).indexOf(clickedItem);
    
    if (activeIndex !== null) {
    clickedItem.parentNode.children[activeIndex].classList.remove('font-bold');
    }

    clickedItem.classList.toggle('font-bold');
    activeIndex = clickedItem.classList.contains('font-bold') ? currentIndex : null;
}
}

alignItems.addEventListener('click', handleListClick);