window['sap-ui-config'] = {
    'compatVersion': 'edge',
    'async': true,
    'oninit': 'module:sap/ui/core/ComponentSupport',
    'resourceroots': {
        'com.tmhew': './'
    },
    'theme': (() => {
        try {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'sap_horizon_dark'
                : 'sap_horizon'
        } catch (e) {
            return 'sap_horizon'
        }
    })()
}