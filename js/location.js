const weightInput = document.querySelector('.weight-input')
const toInput = document.querySelector('.to-input')
const fromInput = document.querySelector('.from-input')
const typeInput = document.querySelector('.form-type')
const form = document.querySelector('.form')
const resetBtn = document.querySelector('.btn-reset')
console.log(form)

const text = document.querySelector('.calculator-val')

const generateRandomDistance = (min , max) => {
  return Math.trunc(Math.random() * (max - min ) + min)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const weight = +weightInput.value
  const to = toInput.value
  const from = fromInput.value
  const type = typeInput.value
  let distance = generateRandomDistance(900, 10000)
  let dPrice;
  let typePrice;
  if(distance < 1000)  dPrice = Math.ceil(distance / 10)
  else dPrice = Math.ceil(distance / 100)
  if(type == 'standard') typePrice = 0
  else if(type == 'fast') typePrice = 40
  else if(type == 'express') typePrice = 100

  const price = weight * 10 + dPrice + typePrice
  text.textContent = price
})

resetBtn.addEventListener('click', () => {
  text.textContent = 00
  weightInput.value = ''
  toInput.value = ''
  fromInput.value = ''
})

