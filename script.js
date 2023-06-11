const anchors = document.querySelectorAll('.nav_btns a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


let menuToggle = document.querySelector(".toggle");
menuToggle.onclick = function() {
  menuToggle.classList.toggle("active")
}