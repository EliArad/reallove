//http://onehungrymind.com/angularjs-dynamic-templates/
app.directive('contentItem', function ($compile) {
  //var imageTemplate = '<div class="entry-photo"><h2>&nbsp;</h2><div class="entry-img"><span><a href="{{rootDirectory}}{{content.data}}"><img src="{{content.filename}}"  style="max-width: 1024px;max-height: 768px" alt=""></a></span></div><div class="entry-text"><div class="entry-title">{{content.title}}</div><div class="entry-copy">{{content.description}}</div></div></div>';
  var imageTemplate = '<img src="{{content.filename}}"  class="img-responsive"  alt=""/><div style="font-size: x-small">{{ content.dated }}</div><div>&nbsp;</div>';
  var videoTemplate = '<div class="entry-video"><h2>&nbsp;</h2><div class="entry-vid"><iframe ng-src="{{content.data}}" width="280" height="200" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div><div class="entry-text"><div class="entry-title">{{content.title}}</div><div class="entry-copy">{{content.description}}</div></div></div>';
  var noteTemplate = '<div class="entry-note"><h2>&nbsp;</h2><div class="entry-text"><div class="entry-title">{{content.title}}</div><div class="entry-copy">{{content.data}}</div></div></div>';

  var inputTemplate = ' <input type="text" value="{{  content.data}}"  class="form-control" id="usr"/>';

  var labelTemplate = '<div style="font-size: x-small;font-family: arial, sans-serif">{{ content.dated  }} <p style="font-size: large" ng-bind-html="content.data"</p></div>';


  var getTemplate = function(contentType) {
    var template = '';

    switch(contentType) {
      case 'image':
        template = imageTemplate;
      break;
      case 'video':
        template = videoTemplate;
        break;
      case 'notes':
        template = noteTemplate;
        break;
      case 'input':
        template = inputTemplate;
        break;
      case 'label':
        template = labelTemplate;
        break;
    }

    return template;
  }

  var linker = function(scope, element, attrs) {
    scope.rootDirectory = 'images/';

    element.html(getTemplate(scope.content.content_type)).show();

    $compile(element.contents())(scope);
  }

  return {
    restrict: "E",
    link: linker,
    scope: {
      content:'='
    }
  };
})
