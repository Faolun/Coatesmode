var spans = $('span[id^="content-"]').hide(),
    i = 0;

(function cycle() { 

    spans.eq(i).fadeIn(300)
              .delay(1500)
              .fadeOut(300, cycle);

    i = ++i % spans.length;

})();