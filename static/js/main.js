$(document).ready(function() {
    i18n.init({
        detectLngQS: 'lang',
        fallbackLng: 'en',
        lowerCaseLng: true
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
