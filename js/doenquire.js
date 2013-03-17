/* see: https://github.com/WickyNilliams/enquire.js/issues/28 */
/* http://www.responsiveads.com/responsive-adsense/ */
enquire.register("screen and (max-width: 767px) and (min-width: 481px)", [
    { match : function() { $('#sizemm').html('481px > width <= 767px'); } }
 ]).listen();     
    
    
enquire.register("screen and (max-width: 480px) and (min-width: 321px)", [
    { match : function() { $('#sizemm').html('320px > width <= 480px'); } }
 ]).listen();   

enquire.register("screen and (max-width: 320px)", [
    { match : function() { $('#sizemm').html('width <= 320px'); } }
 ]).listen();

enquire.register("screen and (min-width: 768px)", [
    { match : function() { $('#sizemm').html('width >= 768px'); } }
 ]).listen();
