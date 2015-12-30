'use strict';

app.controller('vr360videoController', ['$scope', '$state', 'authToken',
  function ($scope, $state, authToken) {


    $(document).ready(function () {
      $('.valiantPhoto').Valiant360();
    });


    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-608903-14', 'flimshaw.net');
    ga('send', 'pageview');


  }

]);
