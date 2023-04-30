sap.ui.predefine('com/tmhew/control/Test', [
    'sap/ui/core/Control',
    'sap/m/Text'
], (Control, Text) => {
    const _Control = Control.extend('com.tmhew.control.Test', {
        renderer: function (rm, control) {
            rm.openStart('div', control)
            rm.openEnd()
            rm.renderControl(new Text({ text: 'hello world' }))
            rm.close('div')
        }
    })

    return _Control
})

sap.ui.predefine('com/tmhew/controller/Index.controller', [
    'sap/ui/core/mvc/Controller'
], (Controller) => {
    const _Controller = Controller.extend('com.tmhew.controller.Index')

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
