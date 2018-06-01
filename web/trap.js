// Tasks
// 1 Display return value from button in viewer
// 2 Transform to electron
// 3 Add a form for entering speed
// 4 Create event which listens on button and prints the result to Viewer
// 4.1 make viewer child from button

function makeContainer () {

  const container = document.createElement('div')
  container.style.backgroundColor = '#00D5F2'
  container.style.width = '600px'
  container.style.height = '400px'

  function makeFormSection () {
    const formular = document.createElement('form')
    formular.style.backgroundColor = '#F4A6A6'
    formular.style.width = '300px'
    formular.style.height = '200px'

    formular.action = '/scurve-form'
    formular.method = 'post'

    function makeFormDiv () {

      const divform = document.createElement('div')

        function makeLabel () {
          const label = document.createElement('label')
          label.htmlFor = 'speed'
          label.innerText = 'Speed Value: '
          return label
        }

        function makeInput () {
          const input = document.createElement('input')
          input.id = 'speed'
          input.type = 'number'
          input.name = 'speed_input'
          return input
        }

        function makeSubmit () {
          const submitButton = document.createElement('button')
          submitButton.style.float = 'left'
          submitButton.style.display = 'table'
          submitButton.innerText = 'Submit!'
          submitButton.onclick = function () {
          formular.innerText = scurvecalc(54878, 7, 0.0005, 3)
          }
          return submitButton
        }

      divform.appendChild(makeLabel())
      divform.appendChild(makeInput())
      divform.appendChild(makeSubmit())

      return divform
    }

    formular.appendChild(makeFormDiv())
    return formular
  }

  function makeViewer () {
    const viewer = document.createElement('div')
    viewer.style.backgroundColor = '#9B9C9D'
    viewer.style.width = '300px'
    viewer.style.height = '400px'
    viewer.style.float = 'right'

    return viewer
  }

  container.appendChild(makeViewer())
  container.appendChild(makeFormSection())

  return container
}

function init () {
  const body = document.querySelector('body')
  body.appendChild(makeContainer())
}

window.onload = init
