function resolveBaseUrl() {
    if (!window.__gCrWeb) window['__gCrWeb'] = {}; // JPF-5935 JavaScript error report. TypeError: undefined is not an object (evaluating '__gCrWeb.autofill.extractForms') 

    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf('requirejs-config.js', 0) > 0) {
            return scripts[i].src.split('requirejs-config.js')[0];
        }
    }
}

var require = { // eslint-disable-line no-undef, no-unused-vars
    baseUrl: resolveBaseUrl(),
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore-min',
        bootstrap: '../resources/scripts/bootstrap',
        sausa: '../resources/scripts/sausa',
        'jquery.effects': 'lib/jquery.effects.slide',
        datetimepicker: 'lib/bootstrap-datetimepicker',
        inputmask: 'lib/jquery.inputmask.bundle',
        jasny: 'lib/jasny-bootstrap',
        tipsy: 'lib/jquery.tipsy',
        cookie: 'lib/jquery.cookie',
        typeahead: 'lib/bootstrap-typeahead',
        chosen: 'lib/chosen.jquery',
        chosenCommon: 'app/chosen-common',
        multiselect: 'lib/bootstrap-multiselect',
        placeholders: 'lib/placeholders.min',
        keyfilter: 'lib/jquery.keyfilter',
        datatables: 'lib/jquery.dataTables',
        moment: 'lib/moment',
        'datetime-moment': 'lib/datetime-moment',
        'ajax.native': 'lib/jquery.ajax.native',
        'to-markdown': 'lib/to-markdown',
        validation: 'lib/jquery.validate.min',
        growl: 'lib/jquery.growl',
        'adyen/encrypt': 'lib/adyen.encrypt', // do not change key name or it will brake adyen injection
        'adyen-cardtype': 'lib/adyen.cardtype.min',
        kotlin: 'app/lib/kotlin',
        script: 'app/script',
        'adyen.card': 'app/adyen-card',
        loginPopup: 'app/auth/login-popup',
        jetprofile: 'app/utils/jetprofile',
        fileUpload : 'lib/fileUpload.jquery',
        shopCommon : 'app/shop/shop-common',
        eformPopup : 'app/shop/eformPopup',
        globals : 'app/globals',
        // configs
        baseShop : 'configs/base-shop',
        checkout : 'app/shop/checkout',
        markside : 'lib/markside',
        marketoForms: '//app-lon02.marketo.com/js/forms2/js/forms2',
        marketoFormValues : '../marketo/form-values',
        segmentationsProcessingDaemon: 'app/segmentations/segmentation-processing-daemon',
        dropin: 'lib/dropin',
        braintree: 'app/shop/braintree'
    },
    priority: ['jquery'],
    shim: {
        bootstrap: ['jquery'],
        sausa: ['jquery', 'bootstrap'],
        'lib/jquery.effects.core': ['jquery'],
        'jquery.effects': ['jquery', 'lib/jquery.effects.core'],
        datetimepicker: ['jquery'],
        inputmask: ['jquery'],
        jasny: ['jquery'],
        'lib/pwstrength': ['jquery'],
        tipsy: ['jquery'],
        cookie: ['jquery'],
        typeahead: ['jquery'],
        markside: ['jquery'],
        chosen: ['jquery'],
        multiselect: ['jquery'],
        keyfilter: ['jquery'],
        script: ['jquery', 'kotlin'],
        globals: ['jquery', 'tipsy', 'datetimepicker'],
        'app/assets': ['globals'],
        growl: ['jquery'],
        'lib/trunk8': ['jquery'],
        fileUpload : ['jquery', 'keyfilter'],
        validation : ['jquery']
    },
    map: {
        '*': {
            // this mapping fixes a problem with datatables and require.js
            // see http://stackoverflow.com/questions/33723298/datatables-trying-to-access-datatables-net-js-with-requirejs
            'datatables.net': 'datatables'
        }
    },
    waitSeconds: 0,
    urlArgs: 'v=2019.11-1909'
};
