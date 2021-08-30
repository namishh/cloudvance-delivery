const navBtn = document.querySelector('.nav-toggle')
const navigation = document.querySelector('.navbar-hidden-links')

navBtn.addEventListener('click', () => {
  navigation.classList.toggle('visible')
  navigation.classList.toggle('pe')

})
console.log(navBtn, navigation)