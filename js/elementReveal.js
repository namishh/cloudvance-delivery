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
