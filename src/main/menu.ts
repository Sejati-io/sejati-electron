import { Menu, app, BrowserWindow, MenuItemConstructorOptions } from 'electron';

export function createAppMenu(mainWindow: BrowserWindow) {
    const template: MenuItemConstructorOptions[] = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Exit Kiosk Mode',
                    accelerator: 'Ctrl+Shift+Q',
                    click: () => {
                        mainWindow.destroy();
                        app.quit();
                    },
                },
            ],
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'toggleDevTools' },
            ],
        },
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}
