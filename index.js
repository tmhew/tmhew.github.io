sap.ui.define([
    'sap/ui/core/Control',
    'sap/ui/core/mvc/XMLView',
    'sap/ui/core/mvc/Controller'
], async (Control, XMLView, Controller) => {
    const indexView = await XMLView.create({
        definition: document.getElementById('Index.view.xml').innerHTML
    })

    indexView.placeAt('content')
})
