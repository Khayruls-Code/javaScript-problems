let secondContainer = document.getElementById('second')
let milisecondContainer = document.getElementById('milisecond')
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')

let milisecond = '00'
let second = '00'
let interval;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true
  interval = setInterval(timer, 10)
})
stopBtn.addEventListener('click', () => {
  clearInterval(interval)
  startBtn.disabled = false
})
resetBtn.addEventListener('click', () => {
  clearInterval(interval)
  milisecond = '00'
  second = '00'
  secondContainer.innerText = second
  milisecondContainer.innerText = milisecond
  startBtn.disabled = false
})

const timer = () => {
  milisecond++
  milisecondContainer.innerText = '0' + milisecond
  if (milisecond > 9) {
    milisecondContainer.innerText = milisecond
  }
  if (milisecond > 100) {
    second++
    milisecond = 0;
    secondContainer.innerText = '0' + second
    milisecondContainer.innerText = milisecond
  }
  if (second > 9) {
    secondContainer.innerText = second
  }
}