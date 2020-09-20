const { app, BrowserWindow } = require('electron')

function App () {
    const win = new BrowserWindow({
        width: 420,
        height: 200,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(`file://${__dirname}/app/views/index.html`)
    win.removeMenu();
    //win.webContents.openDevTools()
}

app.on('ready', App)

app.on('window-all-closed',
    () => (process.platform !== 'darwin') ? app.quit() : null
)

