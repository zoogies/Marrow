const { app, BrowserWindow, ipcMain } = require('electron')
const remote = require('electron').remote;

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})