sap.ui.define([
  'sap/ui/core/UIComponent'
], (UIComponent) => {
  const _UIComponent = UIComponent.extend('com.tmhew.components.main.Component', {
    metadata: {
      interfaces: ['sap.ui.core.IAsyncContentCreation'],
      manifest: 'json'
    }
  })
  
  _UIComponent.prototype.init = function () {
    UIComponent.prototype.init.apply(this, arguments)
    this.getRouter().initialize()
  }
  
  return _UIComponent
})
