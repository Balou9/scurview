// This one is for actually starting the app
// We will understand main and child processes in the longrun
// At the end of this day it is enough to get started! 

var electron = require('electron')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({width: 700, height: 900})
  mainWindow.loadURL('file://' + __dirname + '/web/index.html')
})
