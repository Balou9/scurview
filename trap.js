// Tasks
// 1 Display return value from button in viewer

function makeContainer () {
  const container = document.createElement('div')
  container.style.backgroundColor = '#B89412'
  container.style.width = '1020px'
  container.style.height = '400px'

  function makeViewer () {
    const viewer = document.createElement('div')
    viewer.style.backgroundColor = '#E9E8E6'
    viewer.style.width = '650px'
    viewer.style.height = '400px'
    viewer.style.float = 'right'
    return viewer
  }

  function makeSidebar () {
    const sidebar = document.createElement('div')
    sidebar.style.backgroundColor = '#BCD3D4'
    sidebar.style.width = '350px'
    sidebar.style.height = '400px'
    sidebar.style.float = 'left'

    const button = document.createElement('button')
    button.style.position = 'fixed'
    button.style.float = 'right'
    button.style.display = 'table'
    button.innerText = 'Submit!'
    button.onclick = function () {
      sidebar.innerText = scurvecalc(845542, 7, 0.00045, 10)
    }
    sidebar.appendChild(button)
    return sidebar
  }

  container.appendChild(makeSidebar())
  container.appendChild(makeViewer())
  return container
}

function init () {
  const body = document.querySelector('body')
  body.appendChild(makeContainer())
}

window.onload = init
