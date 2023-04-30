sap.ui.define([
    'sap/ui/core/Control',
    'sap/ui/core/mvc/XMLView',
    'sap/ui/core/mvc/Controller',
    'sap/m/Text'
], async (Control, XMLView, Controller, Text) => {
    Control.extend('com.tmhew.control.Test', {
        renderer: function (rm, control) {
            rm.openStart('div', control)
            rm.openClose()
            rm.renderControl(new Text({ text: 'hello world' }))
            rm.close('div')
        }
    })

    const indexView = await XMLView.create({
        definition: document.getElementById('Index.view.xml').innerHTML
    })
    indexView.placeAt('content')
})
