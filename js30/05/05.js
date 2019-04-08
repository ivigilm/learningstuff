window.onload = function(){
    const panels = document.querySelectorAll('.panel');

    function toggleOpen(){
        this.classList.toggle('open');
    }

    function toggleActive(e){
        // necessary 'includes' because Safari uses 'flex' and others 'flex-grow'
        if(e.propertyName.includes('flex')){
            this.classList.toggle('open-active');
        }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}