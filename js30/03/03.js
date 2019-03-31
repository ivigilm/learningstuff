window.onload = function(){
    const inputs = document.querySelectorAll('.controls input');
    
    function handleUpdate(){
        /* dataset collects every data- attribute from the current element
           || '' makes sure there's no error if there's no data- attribute 
        */
        const suffix = this.dataset.sizing || '';

        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}