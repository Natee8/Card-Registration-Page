let Camps = document.querySelectorAll('.Required')
let Span = document.querySelectorAll('.span-required')
let ValidateNumb = /^[0-9\s]+$/;
let validateLetters = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
let realtime = document.querySelectorAll('[name="RealTime"]')

function ElementFieldsEvent() {
  realtime[0].textContent = Camps[1].value || '0000 0000 0000 0000'
  realtime[1].textContent = Camps[0].value || 'JANE APPLESEED'
  realtime[2].textContent = Camps[2].value || '00'
  realtime[3].textContent = Camps[3].value || '00'
  realtime[4].textContent = Camps[4].value || '000'
}

Camps.forEach((camp) => {
  camp.addEventListener('input', ElementFieldsEvent)
})

Span.forEach((spans) => {
  let message = document.createElement('span')
  spans.appendChild(message)
  message.classList.add('span')
  message.classList.add('Hidden')
})

let spansClass = document.querySelectorAll('.span')

function SetError(input) {
  spansClass[input].classList.add('visible')
  spansClass[input].classList.remove('Hidden')

  Camps[input].classList.add('SetBorderError')
}

function RemoveError(input) {
  spansClass[input].classList.remove('visible')
  spansClass[input].classList.add('Hidden')

  Camps[input].classList.remove('SetBorderError')

}

function marginBottomRemove() {
  let margin = document.querySelectorAll('.containerAlignitens input')
  margin.forEach((inpt) => {
    inpt.style.marginBottom = '10px'
  })
}

function NameValidate() {
  if (Camps[0].value.length < 3 || !validateLetters.test(Camps[0].value)) {
    SetError(0)
    marginBottomRemove()
    spansClass[0].innerHTML = 'Enter three letters from A-Z'
    return true
  }
  else {
    RemoveError(0)
  }
}

function CardValidate() {
  let ValidateNumb = /^[0-9\s]+$/;
  if (Camps[1].value.length < 16 || !ValidateNumb.test(Camps[1].value)) {
    SetError(1)
    spansClass[1].innerHTML = 'Wrong format, numbers only'
    marginBottomRemove()
    return true
  }
  else {
    RemoveError(1)
  }
}

function DateMMValidate() {
  if (Camps[2].value == '' || !ValidateNumb.test(Camps[2].value)) {
    SetError(2)
    spansClass[2].innerHTML = 'The month is blank'
    return true
  } else {
    RemoveError(2)
  }
}

function DateYYValidate() {
  if (Camps[3].value == '' || !ValidateNumb.test(Camps[2].value)) {
    SetError(3)
    spansClass[3].innerHTML = 'The year is blank'
    return true
  } else {
    RemoveError(3)
  }
}

function CVC() {
  if (Camps[4].value.length < 3 || !ValidateNumb.
    test(Camps[2].value)) {
    SetError(4)
    spansClass[4].innerHTML = "CVC must contain three digits"
    return true
  } else {
    RemoveError(4)
  }
}

function submitt() {
  if (NameValidate() == true || CardValidate() == true ||
    DateMMValidate() == true || DateYYValidate() == true ||
    CVC() == true) {

    NameValidate()
    CardValidate()
    DateMMValidate()
    DateYYValidate()
    CVC()

  } else {
    let form = document.getElementById('Form')
    form.innerHTML = ''

    let ContainerSubmitt = document.createElement('div')
    let divCircle = document.createElement('div')
    let thankYou = document.createElement('h1')
    let textP = document.createElement('p')
    let ButtonInpt = document.createElement('input')

    form.appendChild(ContainerSubmitt)
    ContainerSubmitt.classList.add('ContainerSubmitt')

    ContainerSubmitt.appendChild(divCircle)
    divCircle.classList.add('CircleSubmitt')

    ContainerSubmitt.appendChild(thankYou)
    thankYou.innerHTML = 'Thank You!'

    ContainerSubmitt.appendChild(textP)
    textP.innerHTML = "We've added your card detail"

    ContainerSubmitt.appendChild(ButtonInpt)
    ButtonInpt.id = 'inpt'

    let inptType = document.querySelector('#inpt')
    inptType.value = 'Continue'
    inptType.type = 'submit'
  }
}

