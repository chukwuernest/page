const time = document.getElementById('time')

const d = new Date()

let rhour = d.getHours()
let rminute = d.getMinutes()
let rsec = d.getSeconds()
let msec = d.getSeconds() / 1000
document.getElementById(
  'time'
).innerHTML = `${rhour}:${rminute}:${rsec}:${msec}`
