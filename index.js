sap.ui.predefine('com/tmhew/controller/Index.controller', [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/core/Core'
], (Controller, JSONModel, Core) => {
    class _Controller extends Controller {
        onInit () {
            console.log(Core)
            const currentTheme = Core.getConfiguration().getTheme()

            this._viewModel = new JSONModel({
                'themeMode': currentTheme.endsWith('dark') ? 'dark' : 'light'
            })

            this.getView().setModel(this._viewModel, 'view')
        }

        onThemeButtonPressed () {
            let currentThemeMode = this._viewModel.getProperty('/themeMode')
            currentThemeMode = currentThemeMode === 'light' ? 'dark' : 'light'

            Core.applyTheme(
                currentThemeMode === 'light' ? 'sap_horizon' : 'sap_horizon_dark'
            )

            this._viewModel.setProperty('/themeMode', currentThemeMode)
        }

        onContactMePressed () {
            window.open('https://www.linkedin.com/in/tau-ming-hew-02820327/', '_blank')
        }

        onSourceCodePressed () {
            window.open('https://github.com/tmhew/tmhew.github.io', '_blank')
        }
    }

    return _Controller
})

sap.ui.define([
    'sap/ui/core/mvc/XMLView',
    'sap/ui/core/mvc/Controller'
], (XMLView, Controller) => {
    XMLView.create({
        definition: document.getElementById('Index.view.xml').innerHTML
    }).then((indexView) => {
        indexView.placeAt('content')  
    })
})
