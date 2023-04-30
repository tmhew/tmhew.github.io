window['sap-ui-config'] = {
    'compatVersion': 'edge',
    'async': true,
    'libs': 'sap.m, sap.uxap',
    'resourceroots': {
        'com.tmhew': './'
    },
    'oninit': 'module:com/tmhew/index',
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