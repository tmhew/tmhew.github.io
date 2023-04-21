sap.ui.define([
    'sap/ui/core/mvc/Controller'
], (Controller) => {
    const _Controller = Controller.extend('com.tmhew.app.cv.controller.Index')

    _Controller.prototype.onThemeButtonPressed = function (event) {
        const button = event.getSource()
        if (button.getIcon() === 'sap-icon://light-mode') {
            button.setIcon('sap-icon://dark-mode')
            sap.ui.getCore().applyTheme('sap_horizon_dark')
        } else {
            button.setIcon('sap-icon://light-mode')
            sap.ui.getCore().applyTheme('sap_horizon')
        }
    }

    return _Controller
})