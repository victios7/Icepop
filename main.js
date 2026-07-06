const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    title: 'IcepopIDE v2',
    icon: path.join(__dirname, 'Logo.png'),
    backgroundColor: '#1a1a2e',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false
    }
  })

  win.loadFile(path.join(__dirname, 'src', 'IcepopIDE_v2.html'))
  win.setMenuBarVisibility(false)

  win.webContents.on('new-window', (e, url) => {
    e.preventDefault()
    require('electron').shell.openExternal(url)
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
