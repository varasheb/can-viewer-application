const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const net = require('net')
const PORT = 8080; 
const HOST = 'localhost';


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  mainWindow.loadFile('index.html')
}

function connectToServer() {
  const client = new net.Socket()

  client.connect(PORT, HOST, () => {
    console.log(`Connected to server at ${HOST}:${PORT}`)
  })

  client.on('data', (data) => {
    const sentdata=JSON.parse(data)
    console.log("Received from server: ",sentdata)

    // Send data to renderer process
    BrowserWindow.getAllWindows().forEach(win => {
      win.webContents.send('tcp-data', sentdata)
    })
  })

  client.on('error', (err) => {
    console.error(`Client error: ${err.message}`)
    console.log('Reconnecting in 5 seconds...')
    setTimeout(connectToServer, 5000)
  })

  client.on('close', () => {
    console.log('Connection closed')
    console.log('Reconnecting in 5 seconds...')
    setTimeout(connectToServer, 5000)
  })
}

app.whenReady().then(() => {
  createWindow()
  connectToServer()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
