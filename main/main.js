document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('.section_global_a');

    function checkScroll() {
        sections.forEach(section => {
            if (!section.classList.contains('active')) { 
                let sectionTop = section.getBoundingClientRect().top;
                let windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.75) {
                    section.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
});



  
$(document).ready(function() {
    function new_tema(newHref) {
        $('#tema').attr('href', newHref);
        localStorage.setItem('selectedTheme', newHref);
    }

    const savedTheme = localStorage.getItem('selectedTheme');

    if (savedTheme) {
        new_tema(savedTheme);
        $('.input').prop('checked', (savedTheme === "b.css"));
    }

    $('.input').on('change', function() {
        if ($(this).is(':checked')) {
            new_tema("b.css");
        } else {
            new_tema("w.css");
        }
    });
});