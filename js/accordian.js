const accs = document.getElementsByClassName('faqs-faq')

for(let i =0; i < accs.length; i++){
  accs[i].addEventListener('click', () => {
    accs[i].classList.toggle("faqs-active")
    console.log("OK")
  })
}
