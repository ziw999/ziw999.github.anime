let phoneInput = document.querySelector('.phone')
phoneInput.addEventListener('keydown', function (event) {
    if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
    let mask = '+7 (111) 111-11-11'; // Задаем маску

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        // Здесь начинаем сравнивать this.value и mask
        // к примеру опять же
        let currentString = this.value;
        let currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '1') {
                this.value = currentString + event.key;
            } else {
                for (let i = currentLength; i < mask.length; i++) {
                    if (mask[i] == '1') {
                        this.value = currentString + event.key;
                        break;
                    }
                    currentString += mask[i];
                }
            }
        }
    }
});









window.smoothScroll = function(target) {
    let scrollContainer = target;
    do { 
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
   
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    behavior: 'smooth'
}