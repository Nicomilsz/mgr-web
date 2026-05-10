(function () {
  'use strict';

  function track(name, params) {
    if (typeof gtag === 'function') {
      gtag('event', name, params);
    }
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-analytics-event]');
    if (!el) return;

    var eventName = el.getAttribute('data-analytics-event');
    if (!eventName) return;

    var params = {};
    var loc      = el.getAttribute('data-analytics-location');
    var intent   = el.getAttribute('data-analytics-intent');
    var slug     = el.getAttribute('data-analytics-property-slug');
    var propTitle = el.getAttribute('data-analytics-property-title');

    if (loc)       params.location       = loc;
    if (intent)    params.intent         = intent;
    if (slug)      params.property_slug  = slug;
    if (propTitle) params.property_title = propTitle;

    track(eventName, params);

    // Auto-fire whatsapp_click for WA links that declared a different primary event
    if (eventName !== 'whatsapp_click' && el.href && el.href.indexOf('wa.me') !== -1) {
      var waParams = {};
      if (loc)       waParams.location       = loc;
      if (intent)    waParams.intent         = intent;
      if (slug)      waParams.property_slug  = slug;
      if (propTitle) waParams.property_title = propTitle;
      track('whatsapp_click', waParams);
    }
  }, true);

})();
