sap.ui.define([
    'sap/ui/core/mvc/Controller'
], (Controller) => {
    const _Controller = Controller.extend('com.tmhew.app.cv.controller.Index')

    _Controller.prototype.onThemeButtonPressed = function (event) {
        console.log(event)
    }

    return _Controller
})