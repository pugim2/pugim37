// var section7 = $('#contain li');

// function toggleAccordion() {
//   section7.removeClass('activ');
//   $(this).addClass('activ');
// }

// section7.on('click', toggleAccordion);

const section7  = document.querySelectorAll('#contain li');

section7.forEach(function(on1, index) {
    on1.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('activ');
    
    section7.forEach(function(on2, index2) {
      if ( index !== index2 ) {
        on2.parentNode.classList.remove('activ');
      }
    });
  });
});