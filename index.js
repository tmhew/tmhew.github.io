sap.ui.predefine('com/tmhew/control/Test', [
    'sap/ui/core/Control',
    'sap/m/Text'
], (Control, Text) => {
    return Control.extend('com.tmhew.control.Test', {
        renderer: function (rm, control) {
            rm.openStart('div', control)
            rm.openEnd()
            rm.renderControl(new Text({ text: 'hello world' }))
            rm.close('div')
        }
    })
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
