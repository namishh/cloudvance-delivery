const applySmoothScrollToNav = (list) => {
  list.forEach(l => {
    const navBtns = document.querySelectorAll(`.${l}`)
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const section = document.querySelector(`.section-${btn.id}`)
        section.scrollIntoView({behavior : 'smooth'})
      })
    }) 
  })
}
applySmoothScrollToNav(['navbar-item', 'navbar-hidden-item', 'up-btn', 'hero-btn'])

