
// Scroll

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})


// Menu
document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll('.partners-container .row');
    let translateValue = 0;
  
    function moveRows() {
      translateValue -= 1; // Adjust speed here
      if (translateValue <= -(rows[0].offsetWidth + 2)) {
        const firstRow = document.querySelector('.partners-container .row');
        document.querySelector('.partners-container').appendChild(firstRow);
        translateValue = 0;
      }
      rows.forEach(row => {
        row.style.transform = `translateX(${translateValue}px)`;
      });
    }
  
    setInterval(moveRows, 20); // Adjust the interval as needed for the desired animation speed
  });
  
  
// Active
