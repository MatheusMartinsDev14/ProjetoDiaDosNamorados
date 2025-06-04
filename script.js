document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Desativa os outros containers se este foi ativado
            if (this.classList.contains('active')) {
                imageContainers.forEach(otherContainer => {
                    if (otherContainer !== this && otherContainer.classList.contains('active')) {
                        otherContainer.classList.remove('active');
                    }
                });
            }
        });
    });
});