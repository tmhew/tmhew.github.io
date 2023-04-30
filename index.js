sap.ui.predefine('com/tmhew/controller/Index.controller', [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], (Controller, JSONModel) => {
    const _Controller = Controller.extend('com.tmhew.controller.Index')

    _Controller.prototype.onInit = function () {
        const currentTheme = sap.ui.getCore().getConfiguration().getTheme()

        this._viewModel = new JSONModel({
            'themeMode': currentTheme.endsWith('dark') ? 'dark' : 'light'
        })

        this.getView().setModel(this._viewModel, 'view')
    }

    _Controller.prototype.onThemeButtonPressed = function () {
        let currentThemeMode = this._viewModel.getProperty('/themeMode')
        currentThemeMode = currentThemeMode === 'light' ? 'dark' : 'light'

        if (currentThemeMode === 'light') {
            sap.ui.getCore().applyTheme('sap_horizon')
        } else {
            sap.ui.getCore().applyTheme('sap_horizon_dark')
        }

        this._viewModel.setProperty('/themeMode', currentThemeMode)
    }

    _Controller.prototype.onSourceCodeButtonPressed = function () {
        window.open('https://github.dev/tmhew/tmhew.github.io', '_blank')
    }

    _Controller.prototype.onContactMePressed = function () {
        window.open('https://www.linkedin.com/in/tau-ming-hew-02820327/', '_blank')
    }

    return _Controller
})

sap.ui.define([
    'sap/ui/core/mvc/XMLView',
    'sap/ui/core/mvc/Controller'
], async (XMLView, Controller) => {
    const indexView = await XMLView.create({
        definition: document.getElementById('Index.view.xml').innerHTML
    })
    indexView.placeAt('content')
})
