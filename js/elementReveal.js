// Observer For Up Btn

const headerPoint = document.querySelector('.section-content')
const upBtn = document.querySelector('.up-btn')
const headerObserver = new IntersectionObserver((entries , observers) => {
  const [entry] = entries

  if(!entry.isIntersecting) {
    upBtn.classList.add('hidden-btn')
    return
  }
  console.log("Ok")
  upBtn.classList.remove('hidden-btn')

}, {
  root:null,
  threshold : 0.1,
});

headerObserver.observe(headerPoint)


// Reveal on Scroll
const allSections = document.querySelectorAll('.section')
console.log(allSections)
const revealSection = function(entries, observer){
  const [entry] = entries

  if(!entry.isIntersecting) return
  console.log("ok")
  entry.target.classList.remove('section--hidden')

  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root : null,
  threshold : 0.3,
})

allSections.forEach(function(section) {
  section.classList.add('section--hidden')
  sectionObserver.observe(section)
})
