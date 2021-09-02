const applySmoothScrollToNav = (list) => {
  list.forEach(l => {
    const navBtns = document.querySelectorAll(`.${l}`)
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const section = document.querySelector(`.section-${btn.id}`)
        const coordinates = section.getBoundingClientRect()
        console.log(coordinates.x, coordinates.y)
        window.scrollTo({
            left : coordinates.left + window.pageXOffset, 
            top : coordinates.top + window.pageYOffset - 80,
            // Adding behavior
            behavior : "smooth"
        })
      })
    }) 
  })
}
applySmoothScrollToNav(['navbar-item', 'navbar-hidden-item', 'up-btn', 'hero-btn'])

