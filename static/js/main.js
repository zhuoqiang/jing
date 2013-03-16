// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var i18nResource = {
    zh: {
        translation: {
            'programming': '编程',
            'english': '英文',
            'opensource': '开源',
            'configuration': '配置',
            'compiler': '编译器',
            'concurrent': '并发',
            'Tao can Talk': '道可叨',
            'Qiang': '强'
        }
    }
};

$(document).ready(function() {
    i18n.init({
        detectLngQS: 'lang',
        fallbackLng: 'en',
        lowerCaseLng: true,
        resStore: i18nResource,
        debug: true,
        useCookie: false,
        fallbackLng: false
    }).done(function() {
        $('[i18n]').each(function() {
            var e = $(this);
            e.html($.t(e.html()));
        });
    });
    
    var lang = i18n.lng();
    if (moment.langData(lang)) {
        moment.lang(lang);        
    }
    else {
        lang = lang.split('-')[0]
        moment.lang(lang);
    }
    
    $('time[pubdate]').each(function() {
        var t = $(this);
        var time = t.attr('datetime');
        t.html(moment(time).fromNow());
    });

    // $('article>footer').hide();
    
    // $('article').hover(
    //     function () {
    //         $(this).find('footer').show();
    //     },
    //     function () {
    //         $(this).find('footer').hide();
    //     }
    // );
})
