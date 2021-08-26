const accs = document.getElementsByClassName('faqs-faq')

for(let i =0; i < accs.length; i++){
  accs[i].addEventListener('click', () => {
    accs[i].classList.toggle("faqs-active")
    console.log("OK")
  })
}

const navBtn = document.querySelector('.nav-toggle')
const navigation = document.querySelector('.navbar-hidden-links')

navBtn.addEventListener('click', () => {
  navigation.classList.toggle('visible')
})
console.log(navBtn, navigation)