require('./nav.scss');

require("components/icon/main-questions");
require("components/icon/fun-questions");

require('components/logo/java/java-outline.js');
require('components/logo/c/c-outline.js');
require('components/logo/cpp/cpp-outline.js');
require('components/logo/python/python-outline.js');
require('components/logo/c-sharp/c-sharp-outline.js');
require('components/logo/php/php-outline.js');
require('components/logo/kotlin/kotlin-outline.js');
require('components/logo/ruby/ruby-outline.js');
require('components/logo/swift/swift-outline.js');
require('components/logo/objective-c/objective-c-outline.js');
require('components/logo/scala/scala-outline.js');
require('components/logo/javascript/javascript-outline.js');

require("components/icon/databases");
require("components/icon/collaboration");
require("components/icon/demographics");
require("components/icon/raw-data");

import dispatcher from 'utils/dispatcher';

var $ = require('jquery');
var Url = require('utils/url');

dispatcher.domReady(function () {
  var url = new Url(location.href);
  var pathname = url.get('pathname');
  if (pathname) {
    var split = pathname.split('/');
    var pageId = split[split.length - 1] || split[split.length - 2];
    if (pageId && (pageId.indexOf('.') < 0)) {
      $('a[data-page="' + pageId + '"]').attr('data-active', true);
    }
  }
  var hash = url.get('hash');
  if (hash) {
    var anchorId = hash.slice(1);
    if (anchorId) {
      $('a[data-anchor="' + anchorId + '"]').attr('data-anchor-active', true);
    }
  }
  $('a[data-anchor]').on('click', function() {
    $('a[data-anchor-active=true]').attr('data-anchor-active', false);
    $(this).attr('data-anchor-active', true);
    var anchorId = $(this).attr('data-anchor');
    if (anchorId) {
      $('a[data-anchor="' + anchorId + '"]').attr('data-anchor-active', true);
    }
  });
});