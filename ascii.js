window.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.querySelector('.btn1')
  const stopBtn = document.querySelector('.btn2')
  const textarea = document.getElementById('mytextarea')
  const mediumBtn = document.getElementById('medium-btn')
  const fontSiz = document.getElementById('setSize')
  const radioBtns = document.querySelectorAll('.rad')
  const turbo = document.getElementById('turbo')
  const normal = document.getElementById('normal')
  const slo = document.getElementById('slo')

  let position = 0
  let intervalID
  textarea.value = ''
  let animate = () => {
    position += 1
    textarea.value = textarea.value
    textarea.style.padding = position + 'px'
  }
  console.log(OWN)
  //ONCHANGE TYPE
  mediumBtn.addEventListener('change', () => {
    if (mediumBtn.value === 'BLANK') {
      textarea.value = BLANK
      animate(textarea.value)
    } else if (mediumBtn.value === 'CUSTOM') {
      textarea.value = CUSTOM
      animate(textarea.value)
    } else if (mediumBtn.value === 'EXCERCISE') {
      textarea.value = EXERCISE
      animate(textarea.value)
    } else if (mediumBtn.value === 'DIVE') {
      textarea.value = DIVE
      animate(textarea.value)
    } else if (mediumBtn.value === 'JUGGLER') {
      textarea.value = JUGGLER
      animate(textarea.value)
    } else if (mediumBtn.value === 'BIKE') {
      textarea.value = BIKE
      animate(textarea.value)
    } else if (mediumBtn.value === 'HUMAN') {
      textarea.value = HUMAN
      animate(textarea.value)
    } else if (mediumBtn.value === 'FACE') {
      textarea.value = FACE
      animate(textarea.value)
    } else if (mediumBtn.value === 'OWN') {
      textarea.value = OWN
      animate(textarea.value)
    } else if (mediumBtn.value === 'SCARE') {
      textarea.value = SCARE
      animate(textarea.value)
    } else {
      alert('selected is invalid')
    }
  })
  //ONCHANGE SIZE
  fontSiz.addEventListener('change', (x) => {
    if (fontSiz.value === 'medium') {
      textarea.style.fontSize = '12pt'
    } else if (fontSiz.value === 'large') {
      textarea.style.fontSize = '16pt'
    } else if (fontSiz.value === 'tiny') {
      textarea.style.fontSize = '7pt'
    } else if (fontSiz.value === 'extra') {
      textarea.style.fontSize = '24pt'
    } else if (fontSiz.value === 'extrax') {
      textarea.style.fontSize = '32pt'
    } else {
      alert('selected is invalid')
    }
  })

  //Radio buttons
  radioBtns.forEach((btn) => {
    btn.addEventListener('change', () => {
      if (turbo.checked == true) {
        normal.checked = false
        slo.checked = false
        turbo.value = 1
        normal.value = 0
        slo.value = 0
        setInterval(animate, 50)
      } else if (normal.checked == true) {
        slo.checked = false
        turbo.checked = false
        normal.value = 1
        turbo.value = 0
        slo.value = 0
        setInterval(animate, 250)
      } else {
        normal.checked = false
        turbo.checked = false
        slo.value = 1
        normal.value = 0
        turbo.value = 0
        setInterval(animate, 1000)
      }
    })
  })

  startBtn.addEventListener('click', () => {
    intervalID = setInterval(animate, 250)
    startBtn.disabled = true
    stopBtn.disabled = false
  })
  stopBtn.addEventListener('click', () => {
    clearInterval(intervalID)
    stopBtn.disabled = true
    startBtn.disabled = false
  })
})
