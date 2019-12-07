<!DOCTYPE html>
<html lang="en">
<head>

                                            
        <!-- Error reporting -->
<script>(function(){
  window.reportError = function(msg, file, line, col, err, isUnhandledRejection){};
  var prevOnError = window.onerror;
  var onError = function(msg, file, line, col, err) {
    reportError(msg, file, line, col, err, false);
    prevOnError && prevOnError.apply(window, arguments);
    return false;
  };
  window.onerror = onError;
  // Setup reporting for unhandled Promise rejection errors
  window.addEventListener("unhandledrejection", function(e) {
    if (!e.reason) return;
    var l = getSrcLocation(e.reason);
    reportError(e.reason.message, l.file, l.line, l.col, e.reason, true);
  });
  // Setup reporting for console.error and console.warn calls
  patchConsole('error');
  patchConsole('warn');
  // Utility functions
  function patchConsole(fnName) {
    var fn = console[fnName];
    console[fnName] = function() {
      fn.apply(console, arguments);
      var l; try {
        throw new Error('_');
      } catch (err) {
        l = getSrcLocation(err, 1);
      }
      var msg = 'console.' + fnName + ': ' + Array.prototype.join.call(arguments, ' ');
      reportError(msg, l.file, l.line, l.col, undefined, false);
    };
  }
  function getSrcLocation(err, sd) {
    var s = err && err.stack;
    var l = s && s.split("\n")[1 + (sd|0)];
    var r = l && (/^\s*at [^(]*\((.*?):(\d+)(:\d+)?\)$/.exec(l) || /^\s*at (.*?):(\d+)(:\d+)?$/.exec(l));
    return r ? {file: r[1], line: r[2], col: r[3]} : {};
  }
})();</script>
<!-- Error reporting -->        <!-- Google Tag Manager -->
<script>(function() {
  // Initialize Tag Manager queue
  window.dataLayer = window.dataLayer || [];
  window.gtmLoaded = false;
  // Setup reporting for errors that occurred before Tag Manager initialized
  var prevReportError = window.reportError;
  var reportError = function(msg, file, line, col, err, isUnhandledRejection) {
    if (!window.gtmLoaded || isUnhandledRejection) {
      // Reproduce the behavior of the Tag Manager error handler
      window.dataLayer.push(makeEvt(msg, file, line));
    }
    prevReportError && prevReportError.apply(window, arguments);
  };
  window.reportError = reportError;
  // Utility functions
  function makeEvt(msg, file, line) {
    return {
      event: "gtm.pageError", "gtm.errorMessage": msg,
      "gtm.errorUrl": file, "gtm.errorLineNumber": line
    };
  }
})();</script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;j.addEventListener(
    'load', function(){window.gtmLoaded=true});f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5P98');</script>
<!-- End Google Tag Manager -->        <!-- Sentry -->
<script>
    (function() {
        window.sentryLoaded = false;
        window.errorsForSentry = [];
        var prevReportError = window.reportError;
        var reportError = function(
            msg,
            file,
            line,
            col,
            err,
            isUnhandledRejection
        ) {
            if (!window.sentryLoaded) {
                window.errorsForSentry.push(err);
            }
            prevReportError && prevReportError.apply(window, arguments);
        };
        window.reportError = reportError;
    })();
</script>
<script>
    window.sentryLoad = function() {
        window.sentryLoaded = true;
        Sentry.init({
            dsn: 'https://1adb2a61713144eda0786e5af50ddc51@sentry.io/1423069',
            release:
                "jetbrainscom@a6ccaa6ddb",
            beforeSend: function(event) {
                Object.keys(event).forEach(function(key) {
                    var value = event[key];
                    if (isEmail(value)) {
                        delete event[key];
                    }
                });
                return event;
            }
        });
        Sentry.configureScope(function(scope) {
            scope.setTag('page_locale', 'en-us');
            scope.setTag('browser.locale', getPageLocale());

            scope.setTag('http.urlFull', location.href);
            var protocol = location.protocol || '';
            //omit `:` from location.protocol string
            var protocolString = protocol.substring(0, protocol.length - 1);

            scope.setTag('http.protocol', protocolString);

            scope.setTag('http.hostname', location.hostname);

            var search = location.search || '';
            //omit ? from location.search string
            var searchString = search.substr(1);
            if (searchString !== '') {
                scope.setTag('http.query', searchString || '1');
            }
            var hash = location.hash || '';
            //omit # from location.hash string
            var hashString = hash.substr(1);
            if (hashString !== '') {
                scope.setTag('http.fragment', hashString);
            }
        });
        window.errorsForSentry.forEach(Sentry.captureException);

        function getPageLocale() {
            return (
                (navigator.languages && navigator.languages[0]) ||
                navigator.language
            );
        }
        function isEmail(value) {
            var emailRegex = /[\+\-\_\.a-zA-Z0-9]+@[\-\.a-zA-Z0-9]+\.[a-zA-Z0-9]+/g;
            return emailRegex.test(value);
        }
    };
</script>
<script src="https://browser.sentry-cdn.com/5.7.1/bundle.min.js" crossorigin="anonymous" onload="sentryLoad()" async></script>
<!-- End Sentry -->    
                <title>Documentation - ReSharper</title>
    
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, maximum-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000">
<meta name="apple-mobile-web-app-title" content="JetBrains">
<meta name="application-name" content="JetBrains">
<meta name="msapplication-TileColor" content="#000000">
<meta name="theme-color" content="#000000">    <link rel="canonical" href="/resharper/documentation/documentation.html" />    <!-- .61-->
                            <meta name="description" content="Productivity and code refactoring plugin for Visual Studio 2019, 2017, 2015, 2013, 2012, and 2010. Supports C#, XAML, ASP.NET, ASP.NET MVC, JavaScript, TypeScript, VB.NET, and build scripts."/>
        
                    <meta name="keywords" content="C#, VB.NET, XAML, JavaScript, TypeScript, Visual Studio plugin, code refactoring, refactoring, ASP.NET, ASP.NET MVC, .NET, .NET Core, dot net, productivity"/>
        
            
        <link rel="alternate" hreflang="x-default" href="/resharper/documentation/documentation.html" />

                        <link rel="alternate" hreflang="en" href="/resharper/documentation/documentation.html" />
                                <link rel="alternate" hreflang="de" href="/de-de/resharper/documentation/documentation.html" />
                                <link rel="alternate" hreflang="es" href="/es-es/resharper/documentation/documentation.html" />
                                <link rel="alternate" hreflang="fr" href="/fr-fr/resharper/documentation/documentation.html" />
                                <link rel="alternate" hreflang="ja" href="/ja-jp/resharper/documentation/documentation.html" />
                                <link rel="alternate" hreflang="ko" href="/ko-kr/resharper/documentation/documentation.html" />
                                <link rel="alternate" hreflang="ru" href="/ru-ru/resharper/documentation/documentation.html" />
                                <link rel="alternate" hreflang="zh-CN" href="/zh-cn/resharper/documentation/documentation.html" />
                                            <link rel="alternate" hreflang="x-klingon" href="/tl-aa/resharper/documentation/documentation.html" />
            
    
    
        
    
    
    <script>
        var current_lang = 'en-us';
                                    var i18n_info = {"current_lang": "en-us", "languages": [{"canonical": "en", "code": "en-us", "label": "English", "page_translated": true, "url": "/resharper/documentation/documentation.html"}, {"canonical": "de", "code": "de-de", "label": "Deutsch", "page_translated": true, "url": "/de-de/resharper/documentation/documentation.html"}, {"canonical": "es", "code": "es-es", "label": "Espa\u00f1ol", "page_translated": true, "url": "/es-es/resharper/documentation/documentation.html"}, {"canonical": "fr", "code": "fr-fr", "label": "Fran\u00e7ais", "page_translated": true, "url": "/fr-fr/resharper/documentation/documentation.html"}, {"canonical": "ja", "code": "ja-jp", "label": "\u65e5\u672c\u8a9e", "page_translated": true, "url": "/ja-jp/resharper/documentation/documentation.html"}, {"canonical": "ko", "code": "ko-kr", "label": "\ud55c\uad6d\uc5b4", "page_translated": true, "url": "/ko-kr/resharper/documentation/documentation.html"}, {"canonical": "ru", "code": "ru-ru", "label": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", "page_translated": true, "url": "/ru-ru/resharper/documentation/documentation.html"}, {"canonical": "zh-CN", "code": "zh-cn", "label": "\u7b80\u4f53\u4e2d\u6587", "page_translated": true, "url": "/zh-cn/resharper/documentation/documentation.html"}, {"canonical": "pt-BR", "code": "pt-br", "label": "Portugu\u00eas do Brasil", "page_translated": false, "url": "/pt-br/resharper/documentation/documentation.html"}, {"canonical": "x-klingon", "code": "tl-aa", "label": "tlhIngan Hol", "page_translated": true, "url": "/tl-aa/resharper/documentation/documentation.html"}]};
                            var navigationMenu = {"primary": {"id": "main_v2", "items": [{"id": "tools", "title": "Tools", "descriptionTitle": "Toolbox App", "descriptionLogoId": "toolbox", "descriptionLink": "Learn more", "descriptionUrl": "/toolbox-app/", "description": "Manage your tools the easy way", "src": "/img/banners-menu-main/toolbox-vertical.png", "horisontalSrc": "/img/banners-menu-main/toolbox-horisontal.png", "bgColor": "#3E0598", "isVisible": true, "hasCategories": true, "items": [{"title": "IDEs", "items": [{"isActive": false, "id": "appcode", "title": "AppCode", "url": "/objc/", "logoLeftActionId": "appcode", "items": [], "cleaned_url": "/objc/"}, {"isActive": false, "id": "clion", "title": "CLion", "url": "/clion/", "logoLeftActionId": "clion", "items": [], "cleaned_url": "/clion/"}, {"isActive": false, "id": "datalore", "title": "Datalore", "url": "https://datalore.io/", "isExternalLink": true, "logoLeftActionId": "datalore", "items": [], "cleaned_url": "https://datalore.io/"}, {"isActive": false, "id": "datagrip", "title": "DataGrip", "url": "/datagrip/", "logoLeftActionId": "datagrip", "items": [], "cleaned_url": "/datagrip/"}, {"isActive": false, "id": "goland", "title": "GoLand", "url": "/go/", "logoLeftActionId": "goland", "items": [], "cleaned_url": "/go/"}, {"isActive": false, "id": "idea", "title": "IntelliJ IDEA", "url": "/idea/", "logoLeftActionId": "intellij-idea", "items": [], "cleaned_url": "/idea/"}, {"isActive": false, "id": "phpstorm", "title": "PhpStorm", "url": "/phpstorm/", "logoLeftActionId": "phpstorm", "items": [], "cleaned_url": "/phpstorm/"}, {"isActive": false, "id": "pycharm", "title": "PyCharm", "url": "/pycharm/", "logoLeftActionId": "pycharm", "items": [], "cleaned_url": "/pycharm/"}, {"isActive": false, "id": "rider", "title": "Rider", "url": "/rider/", "logoLeftActionId": "rider", "items": [], "cleaned_url": "/rider/"}, {"isActive": false, "id": "rubymine", "title": "RubyMine", "url": "/ruby/", "logoLeftActionId": "rubymine", "items": [], "cleaned_url": "/ruby/"}, {"isActive": false, "id": "webstorm", "title": "WebStorm", "url": "/webstorm/", "logoLeftActionId": "webstorm", "items": [], "cleaned_url": "/webstorm/"}, {"isActive": false, "id": "toolbox", "type": "special", "title": "Toolbox App", "url": "/toolbox-app/", "logoLeftId": "toolbox", "description": "A control panel for your tools and projects", "items": [], "cleaned_url": "/toolbox-app/"}]}, {"title": ".NET & VISUAL STUDIO", "items": [{"isActive": false, "id": "resharper", "title": "ReSharper", "url": "/resharper/", "logoLeftActionId": "resharper", "items": [], "cleaned_url": "/resharper/"}, {"isActive": false, "id": "rider", "title": "Rider", "url": "/rider/", "logoLeftActionId": "rider", "items": [], "cleaned_url": "/rider/"}, {"isActive": false, "id": "resharper-cpp", "title": "ReSharper C++", "url": "/resharper-cpp/", "logoLeftActionId": "resharper-cpp", "items": [], "cleaned_url": "/resharper-cpp/"}, {"isActive": false, "id": "dotcover", "title": "dotCover", "url": "/dotcover/", "logoLeftActionId": "dotcover", "items": [], "cleaned_url": "/dotcover/"}, {"isActive": false, "id": "dotmemory", "title": "dotMemory", "url": "/dotmemory/", "logoLeftActionId": "dotmemory", "items": [], "cleaned_url": "/dotmemory/"}, {"isActive": false, "id": "dotpeek", "title": "dotPeek", "url": "/decompiler/", "logoLeftActionId": "dotpeek", "items": [], "cleaned_url": "/decompiler/"}, {"isActive": false, "id": "dottrace", "title": "dotTrace", "url": "/profiler/", "logoLeftActionId": "dottrace", "items": [], "cleaned_url": "/profiler/"}]}, {"title": "TEAM TOOLS", "items": [{"isActive": false, "id": "teamcity", "title": "TeamCity", "url": "/teamcity/", "logoLeftActionId": "teamcity", "items": [], "cleaned_url": "/teamcity/"}, {"isActive": false, "id": "upsource", "title": "Upsource", "url": "/upsource/", "logoLeftActionId": "upsource", "items": [], "cleaned_url": "/upsource/"}, {"isActive": false, "id": "youtrack", "title": "YouTrack", "url": "/youtrack/", "logoLeftActionId": "youtrack", "items": [], "cleaned_url": "/youtrack/"}, {"isActive": false, "id": "hub", "title": "Hub", "url": "/hub/", "logoLeftActionId": "hub", "items": [], "cleaned_url": "/hub/"}]}, {"title": "PLUGIN MARKETPLACE", "items": [{"isActive": false, "id": "bigdata", "title": "Big Data Tools", "url": "https://plugins.jetbrains.com/plugin/12494-big-data-tools", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/plugin/12494-big-data-tools"}, {"isActive": false, "id": "rustsupport", "title": "Rust", "url": "https://plugins.jetbrains.com/plugin/8182-rust", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/plugin/8182-rust"}, {"isActive": false, "id": "scalaplugin", "title": "Scala", "url": "https://plugins.jetbrains.com/plugin/1347-scala", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/plugin/1347-scala"}, {"isActive": false, "id": "idethemes", "title": "IDE Themes", "url": "https://plugins.jetbrains.com/search?tags=Theme", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/search?tags=Theme"}, {"isActive": false, "id": "plugins", "title": "All Plugins", "url": "https://plugins.jetbrains.com/", "isExternalLink": true, "items": [], "cleaned_url": "https://plugins.jetbrains.com/"}]}, {"title": "EDUCATION", "items": [{"isActive": false, "id": "pycharm-edu", "title": "PyCharm Edu", "url": "/education/", "urlHash": "#lang=python&role=learner", "logoLeftActionId": "pycharm-edu", "items": [], "cleaned_url": "/education/"}, {"isActive": false, "id": "idea-edu", "title": "IntelliJ IDEA Edu", "url": "/education/", "urlHash": "#lang=java&role=learner", "logoLeftActionId": "intellij-idea", "items": [], "cleaned_url": "/education/"}, {"isActive": false, "id": "jb-academy", "title": "JB Academy", "url": "/academy/", "items": [], "cleaned_url": "/academy/"}]}]}, {"id": "languages", "title": "Languages", "descriptionTitle": "Kotlin/Everywhere", "descriptionLogoId": "header-kotlin-everywhere", "descriptionLink": "Join in!", "descriptionUrl": "//everywhere.kotlinlang.org", "description": "A worldwide event series for learning the best Kotlin practices on all platforms", "descriptionBig": true, "src": "/img/banners-menu-main/kotlin-vertical.png", "horisontalSrc": "/img/banners-menu-main/kotlin-horisontal.png", "bgColor": "#D6721C", "isExternalLink": true, "isVisible": true, "hasCategories": false, "items": [{"isActive": false, "id": "kotlin", "title": "Kotlin", "url": "https://kotlinlang.org/", "isExternalLink": true, "logoLeftId": "header-kotlin-grayscale", "logoLeftActionId": "kotlin", "logoLeftSize": "50", "description": "Programming language \n for JVM & Android", "items": [], "cleaned_url": "https://kotlinlang.org/"}, {"isActive": false, "id": "mps", "title": "MPS", "url": "/mps/", "logoLeftId": "header-mps-grayscalse", "logoLeftActionId": "mps", "logoLeftSize": "50", "description": "Create your own domain-specific language", "items": [], "cleaned_url": "/mps/"}]}, {"id": "solutions", "title": "Solutions", "descriptionTitle": "JetBrains Academy", "descriptionLogoId": "academy-logo", "descriptionLink": "Join in!", "descriptionUrl": "/academy", "description": "An educational platform for future professionals", "src": "/img/banners-menu-main/academy-vertical.png", "horisontalSrc": "/img/banners-menu-main/academy-horisontal.png", "bgColor": "#53288E", "hasCategories": false, "isVisible": true, "items": [{"isActive": false, "title": "C++ Tools", "url": "/cpp/", "logoLeftId": "header-cpp-grayscale", "logoLeftActionId": "header-cpp", "description": "Tools for C/C++ development \nfor any platform", "items": [], "cleaned_url": "/cpp/"}, {"isActive": false, "title": "For Business", "url": "/store/business/", "logoLeftId": "header-for-business-grayscale", "logoLeftActionId": "header-for-business", "description": "Wide range of tools. \nAll major technologies covered", "items": [], "cleaned_url": "/store/business/"}, {"isActive": false, "title": "Game Development", "url": "/gamedev/", "logoLeftId": "header-gamedev-grayscale", "logoLeftActionId": "header-gamedev", "description": "Tools for game development \nfor any platform", "items": [], "cleaned_url": "/gamedev/"}, {"isActive": false, "title": "DevOps", "url": "/devops/", "logoLeftId": "header-devops-grayscale", "logoLeftActionId": "header-devops", "description": "Tools and integrations \nfor any infrastructure", "items": [], "cleaned_url": "/devops/"}, {"isActive": false, "title": "Education", "url": "/education/", "logoLeftId": "header-education-grayscale", "logoLeftActionId": "header-education", "description": "Products to learn and teach programming", "items": [], "cleaned_url": "/education/"}]}, {"id": "support", "title": "Support", "description": "Pricing and licensing for businesses and individuals", "descriptionTitle": "JetBrains Store", "descriptionLogoId": "header-store", "descriptionUrl": "/store/?fromMenu#edition=commercial", "descriptionLink": "visit store", "isVisible": true, "hasCategories": true, "items": [{"title": "CUSTOMERS", "items": [{"isActive": false, "title": "Sales Support", "url": "/support/sales/", "description": "Orders, payments", "items": [], "cleaned_url": "/support/sales/"}, {"isActive": false, "title": "Product Support", "url": "/support/", "description": "Tech support, documentation", "items": [], "cleaned_url": "/support/"}]}, {"title": "COMMUNITY PROGRAMS", "items": [{"isActive": false, "title": "Education", "url": "/community/education/", "description": "Students, classrooms, training", "items": [], "cleaned_url": "/community/education/"}, {"isActive": false, "title": "Open Source", "url": "/community/opensource/", "description": "Projects support", "items": [], "cleaned_url": "/community/opensource/"}, {"isActive": false, "title": "Sponsorship", "url": "/community/support/", "description": "User groups, events, technology experts", "items": [], "cleaned_url": "/community/support/"}]}]}, {"id": "company", "title": "Company", "isVisible": true, "hasCategories": true, "items": [{"title": "INITIATIVES", "items": [{"isActive": false, "title": "Open Source", "url": "/opensource/", "description": "Projects, contributions", "items": [], "cleaned_url": "/opensource/"}, {"isActive": false, "title": "Research", "url": "/research/", "description": "Market, Scientific", "items": [], "cleaned_url": "/research/"}]}, {"title": "COMPANY", "items": [{"isActive": false, "title": "About", "url": "/company/", "description": "People, customers, awards", "items": [], "cleaned_url": "/company/"}, {"isActive": false, "title": "Brand Assets", "url": "/company/brand/", "description": "Guidelines, logos", "items": [], "cleaned_url": "/company/brand/"}, {"isActive": false, "title": "Careers", "url": "/careers/apply/", "description": "Jobs, internships", "items": [], "cleaned_url": "/careers/apply/"}, {"isActive": false, "title": "Events", "url": "/company/events/", "description": "Conferences, meetups", "items": [], "cleaned_url": "/company/events/"}, {"isActive": false, "title": "Contacts", "url": "/company/contacts/", "description": "Partners, resellers, Kotlin training", "items": [], "cleaned_url": "/company/contacts/"}]}, {"title": "RESOURCES", "items": [{"isActive": false, "title": "Newsletters", "url": "/resources/newsletters/", "items": [], "cleaned_url": "/resources/newsletters/"}, {"isActive": false, "title": "Webinars", "url": "/resources/webinars/", "items": [], "cleaned_url": "/resources/webinars/"}, {"isActive": false, "title": "Early Access", "url": "/resources/eap/", "items": [], "cleaned_url": "/resources/eap/"}, {"isActive": false, "title": "Blog", "url": "//blog.jetbrains.com/", "isExternalLink": true, "items": [], "cleaned_url": "//blog.jetbrains.com/"}]}]}, {"isActive": false, "id": "store", "url": "/store/?fromNavMenu", "title": "Store", "isVisible": true, "hasCategories": false, "items": [], "cleaned_url": "/store/?fromNavMenu"}]}, "secondary": {"isActive": true, "id": "product_resharper", "logoId": "resharper", "url": "/resharper/", "title": "ReSharper", "items": [{"isActive": false, "title": "What's New", "url": "/resharper/whatsnew/", "label": "2019.2", "items": [{"isActive": false, "title": "What's New in ReSharper 10", "url": "/resharper/whatsnew/whatsnew_10.html", "items": [], "cleaned_url": "/resharper/whatsnew/whatsnew_10.html"}, {"isActive": false, "title": "What's New in ReSharper 9", "url": "/resharper/whatsnew/whatsnew_9.html", "items": [], "cleaned_url": "/resharper/whatsnew/whatsnew_9.html"}, {"isActive": false, "title": "What's New in ReSharper 8", "url": "/resharper/whatsnew/whatsnew_8.html", "items": [], "cleaned_url": "/resharper/whatsnew/whatsnew_8.html"}], "cleaned_url": "/resharper/whatsnew/"}, {"isActive": false, "title": "Early Access", "url": "/resharper/eap/", "items": [], "cleaned_url": "/resharper/eap/"}, {"isActive": false, "title": "Features", "url": "/resharper/features/", "items": [{"isActive": false, "title": "Code Analysis", "url": "/resharper/features/code_analysis.html", "items": [], "cleaned_url": "/resharper/features/code_analysis.html"}, {"isActive": false, "title": "Quick-Fixes", "url": "/resharper/features/quick_fixes.html", "items": [], "cleaned_url": "/resharper/features/quick_fixes.html"}, {"isActive": false, "title": "Context Actions", "url": "/resharper/features/context_actions.html", "items": [], "cleaned_url": "/resharper/features/context_actions.html"}, {"isActive": false, "title": "Refactorings", "url": "/resharper/features/code_refactoring.html", "items": [], "cleaned_url": "/resharper/features/code_refactoring.html"}, {"isActive": false, "title": "Navigation and Search", "url": "/resharper/features/navigation_search.html", "items": [], "cleaned_url": "/resharper/features/navigation_search.html"}, {"isActive": false, "title": "Coding Assistance", "url": "/resharper/features/coding_assistance.html", "items": [], "cleaned_url": "/resharper/features/coding_assistance.html"}, {"isActive": false, "title": "Code Completion", "url": "/resharper/features/code_completion.html", "items": [], "cleaned_url": "/resharper/features/code_completion.html"}, {"isActive": false, "title": "Project Level Features", "url": "/resharper/features/project_level.html", "items": [], "cleaned_url": "/resharper/features/project_level.html"}, {"isActive": false, "title": "Code Generation", "url": "/resharper/features/code_generation.html", "items": [], "cleaned_url": "/resharper/features/code_generation.html"}, {"isActive": false, "title": "Code Templates", "url": "/resharper/features/code_templates.html", "items": [], "cleaned_url": "/resharper/features/code_templates.html"}, {"isActive": false, "title": "Code Style", "url": "/resharper/features/code_formatting.html", "items": [], "cleaned_url": "/resharper/features/code_formatting.html"}, {"isActive": false, "title": "Debugging Assistance", "url": "/resharper/features/debugging_assistance.html", "items": [], "cleaned_url": "/resharper/features/debugging_assistance.html"}, {"isActive": false, "title": "Unit Testing", "url": "/resharper/features/unit_testing.html", "items": [], "cleaned_url": "/resharper/features/unit_testing.html"}, {"isActive": false, "title": "Internationalization", "url": "/resharper/features/internationalization.html", "items": [], "cleaned_url": "/resharper/features/internationalization.html"}, {"isActive": false, "title": "ASP.NET and ASP.NET MVC Tools", "url": "/resharper/features/asp_net_editor.html", "items": [], "cleaned_url": "/resharper/features/asp_net_editor.html"}, {"isActive": false, "title": "JavaScript and TypeScript Tools", "url": "/resharper/features/javascript_typescript.html", "items": [], "cleaned_url": "/resharper/features/javascript_typescript.html"}, {"isActive": false, "title": "XAML Editing Tools", "url": "/resharper/features/xaml_editor.html", "items": [], "cleaned_url": "/resharper/features/xaml_editor.html"}, {"isActive": false, "title": "NAnt and MSBuild Scripts Editing", "url": "/resharper/features/nant_msbuild_script.html", "items": [], "cleaned_url": "/resharper/features/nant_msbuild_script.html"}, {"isActive": false, "title": "Command Line Tools", "url": "/resharper/features/command-line.html", "items": [], "cleaned_url": "/resharper/features/command-line.html"}], "cleaned_url": "/resharper/features/"}, {"isActive": true, "title": "Docs", "url": "/resharper/documentation/", "items": [], "cleaned_url": "/resharper/documentation/"}, {"isActive": false, "title": "Blog & Social", "url": "/resharper/social/", "items": [], "cleaned_url": "/resharper/social/"}, {"isActive": false, "title": "Plugins", "url": "/resharper/plugins/", "items": [{"isActive": false, "title": "ReSharper Plugin Directory", "url": "/resharper/plugins/list.html", "items": [], "cleaned_url": "/resharper/plugins/list.html"}], "cleaned_url": "/resharper/plugins/"}, {"isActive": false, "title": "Buy", "url": "/resharper/buy/", "items": [], "cleaned_url": "/resharper/buy/"}, {"isActive": false, "title": "Download", "url": "/resharper/download/", "type": "button", "items": [{"isActive": false, "title": "ReSharper Ultimate System Requirements", "url": "/resharper/download/system_requirements.html", "items": [], "cleaned_url": "/resharper/download/system_requirements.html"}], "cleaned_url": "/resharper/download/"}], "cleaned_url": "/resharper/"}};
        
        var is_layout_adaptive = false;
        
        var disable_language_picker = false;
        
        var english_only_url_prefixes = [];
            </script>
    
            <script></script>
    
        
    
            <link href="/_assets/common.d44d81f300d3bff87efe.css" rel="stylesheet" type="text/css">
<link href="/_assets/default-page.fabf52db4bf34ea78af0.css" rel="stylesheet" type="text/css">
<link href="/_assets/resharper/documentation/index.entry.ddf2eb53e7adc2e0efd1.css" rel="stylesheet" type="text/css">
        <script src="/_assets/common.34604685b633d15ae3ed.js" type="text/javascript"></script>
<script src="/_assets/default-page.2e180fc15a6b94fe7fa3.js" type="text/javascript"></script>
<script src="/_assets/resharper/documentation/index.entry.06120508ba96263e6060.js" type="text/javascript"></script>
    
            <!-- Social Media tag Starts -->
    <!-- Open Graph data -->
            <meta property="og:title" content="Documentation - ReSharper"/>
    
                    <meta property="og:description" content="Productivity and code refactoring plugin for Visual Studio 2019, 2017, 2015, 2013, 2012, and 2010. Supports C#, XAML, ASP.NET, ASP.NET MVC, JavaScript, TypeScript, VB.NET, and build scripts."/>
    <meta property="og:image" content="/resources.jetbrains.com/storage/products/resharper/img/meta/resharper_1280x800.png"/>

    <meta property="og:site_name" content="JetBrains"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://www.jetbrains.com/resharper/documentation/documentation.html"/>
    <!-- Social Media tag Ends -->
</head>

<body class="nojs  ">

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P98" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<script>
/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-flexboxtweener !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,l;for(var f in v)if(v.hasOwnProperty(f)){if(e=[],n=v[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],l=s.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function i(e,n){return!!~(""+e).indexOf(n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function d(){var e=n.body;return e||(e=u(b?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var i,s,l,f,a="modernizr",p=u("div"),c=d();if(parseInt(r,10))for(;r--;)l=u("div"),l.id=o?o[r]:a+(r+1),p.appendChild(l);return i=u("style"),i.type="text/css",i.id="s"+a,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=a,c.fake&&(c.style.background="",c.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!s}function c(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+a(n[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e,n,o,l){function f(){d&&(delete E.style,delete E.modElem)}if(l=r(l,"undefined")?!1:l,!r(o,"undefined")){var a=c(e,o);if(!r(a,"undefined"))return a}for(var d,p,m,h,y,v=["modernizr","tspan"];!E.style;)d=!0,E.modElem=u(v.shift()),E.style=E.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],y=E.style[h],i(h,"-")&&(h=s(h)),E.style[h]!==t){if(l||r(o,"undefined"))return f(),"pfx"==n?h:!0;try{E.style[h]=o}catch(g){}if(E.style[h]!=y)return f(),"pfx"==n?h:!0}return f(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+x.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?m(l,n,o,i):(l=(e+" "+S.join(s+" ")+s).split(" "),f(l,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var v=[],g={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){v.push({name:e,fn:n,options:t})},addAsyncTest:function(e){v.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],w="Moz O ms Webkit",x=g._config.usePrefixes?w.split(" "):[];g._cssomPrefixes=x;var S=g._config.usePrefixes?w.toLowerCase().split(" "):[];g._domPrefixes=S;var _=n.documentElement,b="svg"===_.nodeName.toLowerCase(),z={elem:u("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style}),g.testAllProps=h,g.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),o(),delete g.addTest,delete g.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);

if (!Modernizr.flexbox && !Modernizr.flexboxtweener) {

  var $body = $('body');

  var nodesClasses = {
    wrapper: 'not-supported-browser',
    container: 'not-supported-browser__container',

    title: 'not-supported-browser__title',
    content: 'not-supported-browser__content',
    logo: 'not-supported-browser__logo'
  };

  var nodes = {
    wrapper: $('<div class="' + nodesClasses.wrapper + '"></div>'),
    title: $('<div class="' + nodesClasses.title + '">Sorry, your browser is not fully supported</div>'),
    content: $('<div class="' + nodesClasses.content + '">There may be some issues with pages layout in your current browser.<br/>Please use an alternate browser until we resolve the issues.<br/>Thank you.</div>'),
    container: $('<div class="' + nodesClasses.container + '"></div>'),
    logo: $('<div class="' + nodesClasses.logo + '"><svg class="sprite-img _jetbrains" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#jetbrains"></use></svg></div>')
  };

  $body.addClass('overflow-hidden');


  nodes.content
    .prepend(nodes.title)
    .prepend(nodes.logo);

  nodes.container
    .append(nodes.content);

  nodes.wrapper
    .append(nodes.container)
    .appendTo($body);
}
</script>
<div class="page">
                <div class="page__header">
                <header class="menu-main header"  id="js-menu-main">
    <div class="wt-container">
        <div class="wt-row wt-row_nowrap wt-row_size_s wt-row_align-items_center">
            <div class="wt-col-auto-fill">
                <a href="/" class="menu-main__logo-link"><svg class="_jetbrains-simple sprite-img menu-main__logo" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#jetbrains-simple"></use></svg></a>
            </div>
            <div class="wt-col-inline wt-display-md-none menu-main-skeleton-text-1" style="min-width: 69px"></div>
            <div class="wt-col-inline wt-display-md-none menu-main-skeleton-text-1" style="min-width: 81px"></div>
            <div class="wt-col-inline wt-display-md-none menu-main-skeleton-text-1" style="min-width: 46px"></div>
            <div class="wt-col-inline menu-main-skeleton-button"></div>
            <div class="wt-col-inline menu-main-skeleton-button"></div>
        </div>
    </div>
</header>



  <div class="menu-second" id="js-menu-second">
    <div class="wt-container">
        <div id="js-menu-second-mobile-wrapper" class="wt-display-none">
            <div id="js-menu-second-mobile" >
                <div class="menu-second-mobile wt-row wt-row_size_m wt-row_align-items_center wt-row_justify_between">
                    <div class="wt-col-inline menu-second-skeleton-text-2" style="max-width: 120px"></div>
                    <div class="wt-col-inline menu-second-skeleton-button" style="max-width: 80px"></div>
                </div>
            </div>
        </div>

        <div id="js-menu-second-desktop" class="menu-second-desktop
                       wt-row wt-row_size_0 wt-row_align-items_center">
            <div class="wt-col-auto-fill">
                <a class="menu-second-title-box"
                   href="/resharper/">
                                            <span class="menu-second-title-box__logo jetbrains-logo">
                            <svg class="_resharper sprite-img" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#resharper"></use></svg>
                        </span>
                    
                    <span class="menu-second-title-box__title wt-h3">ReSharper</span>
                </a>
            </div>

                            
                                                        <a href="/resharper/whatsnew/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                ">
                        What&#39;s New
                         2019.2                    </a>
                                            
                                                        <a href="/resharper/eap/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                ">
                        Early Access
                                            </a>
                                            
                                                        <a href="/resharper/features/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                ">
                        Features
                                            </a>
                                            
                                                        <a href="/resharper/documentation/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                wt-text-2_hardness_primary">
                        Docs
                                            </a>
                                            
                                                        <a href="/resharper/social/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                ">
                        Blog &amp; Social
                                            </a>
                                            
                                                        <a href="/resharper/plugins/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                ">
                        Plugins
                                            </a>
                                            
                                                        <a href="/resharper/buy/"
                       class="wt-col-inline wt-text-2 wt-text-2_hardness_average menu-second__link
                                                                ">
                        Buy
                                            </a>
                                            
                            
                                                    
                            <a href="/resharper/download/"
                   class="wt-col-inline menu-second__download-button wt-button wt-button_size_s wt-button_mode_primary">
                    Download
                </a>
                    </div>

    </div>
</div>

            </div>
    
    <div class="page__content ">
        <div class="section-content">
<div class="wt-container article-content">
<h1>ReSharper Documentation</h1>
<div class="wt-row wt-row_size_m">
<div class="wt-col-5">
<div class="screen-img">
<a class="js-popup popup _with-icon _show-video reSharper-is-awesome" href="//youtu.be/ld7ubGmxL7A">
<span class="reSharper-is-awesome__title no-margin-top">Why ReSharper is&nbsp;awesome</span>
<img alt="Why ReSharper is awesome" src="/resharper/documentation/img/video-bg.jpg">
</a>
</div>
</div>
<div class="wt-col-6 wt-offset-left-1">
<h3 class="no-margin-top">What's the best way to quickly learn ReSharper basics?</h3>
<p>One of the best ways is probably to watch this short video in which Hadi Hariri gives a demo
                        of ReSharper's navigation and search, code analysis, refactorings, unit testing, code
                        generation, and support for multiple languages and frameworks, all in about 10 minutes.</p>
<p>A lot more <a class="_external" href="//www.youtube.com/playlist?list=PLQ176FUIyIUa7pt4QLvXsspND1q-S_Zrx">ReSharper
                        videos</a> is also available for you to view on JetBrains YouTube channel.</p>
<p>In addition, you can get a solid overview of ReSharper features by watching <span class="text-nowrap">the <a class="_external" href="https://app.pluralsight.com/library/courses/resharper-fundamentals/description">ReSharper Fundamentals</a></span> course on Pluralsight.</p>
</div>
</div>
</div>
</div>
<div class="section-content">
<div class="wt-container article-content">
<div class="wt-row wt-row_size_m">
<div class="wt-col-7">
<h3>How do I explore ReSharper in all its variety?</h3>
<p>If you want to dive into ReSharper's diverse feature set, try <strong><a href="/help/resharper/">ReSharper
                        Online Help</a></strong>
                        for an all-around description of language support, specific features, and how and why to use
                        them.</p>
</div>
<div class="wt-col-3 wt-col-lg-4 wt-offset-left-1">
<a class="screen-img" href="/help/resharper/">
<img alt="ReSharper help" src="/resharper/documentation/img/resharper_help@2x.png" width="136,5">
</a>
</div>
</div>
<div class="wt-row wt-row_size_m">
<div class="wt-col-7">
<h3>What if I still have questions?</h3>
<p>If something is unclear about ReSharper or you experience any difficulties with it, visit
                        <strong><a class="_external" href="https://resharper-support.jetbrains.com/hc/en-us">
                            ReSharper Knowledge Base</a></strong>
                        to check frequently asked questions, or harness the collective intelligence of our community forum.</p>
</div>
</div>
<div class="wt-row wt-row_size_m">
<div class="wt-col-7">
<h3>How is ReSharper better than plain Visual Studio?</h3>
<p>ReSharper is way more powerful than even the latest releases of Visual Studio in terms of
                        code analysis, set of refactorings and code transformations, depth of navigation support and
                        in many more respects. For a brief overview of ReSharper value over recent versions of
                        Visual Studio, see the following docs:</p>
<ul>
<li><a href="/resharper/compare/resharper-vs-visual-studio/index.html">ReSharper 2019.1 vs. Visual Studio 2019</a></li>
<li><a href="/resharper/documentation/comparisonMatrix_R2018_3_vs2017.html">ReSharper 2018.3 vs. Visual Studio 2017</a></li>
<li><a href="/resharper/documentation/comparisonMatrix_R2018_1_vs2017.html">ReSharper 2018.1 vs. Visual Studio 2017</a></li>
<li><a href="/resharper/documentation/comparisonMatrix_R2017_3_vs2017.html">ReSharper 2017.3 vs. Visual Studio 2017</a></li>
<li><a href="/resharper/documentation/comparisonMatrix_R2016_3_vs2015.html">ReSharper 2016.3 vs. Visual Studio 2015</a></li>
</ul>
</div>
</div>
<div class="wt-row wt-row_size_m">
<div class="wt-col-7">
<h3>How can ReSharper help solve common .NET development tasks?</h3>
<p>ReSharper helps with a great deal of frequent software development and maintenance tasks,
                        such as finding unused code, complying with naming guidelines, detecting possible runtime
                        exceptions, or adopting software design patterns. See <a class="_external" href="//www.jetbrains.com/help/resharper/Cookbook.html">
                            ReSharper Cookbook</a> for tutorials on
                        undertaking these and other tasks using ReSharper.</p>
</div>
<div class="wt-col-3 wt-col-lg-4 wt-offset-left-1">
<a class="screen-img" href="//www.jetbrains.com/help/resharper/Cookbook.html">
<img alt="ReSharper Cookbook" src="/resharper/documentation/img/resharper_cookbook@2x.png" width="160">
</a>
</div>
</div>
<div class="wt-row wt-row_size_m">
<div class="wt-col-7">
<h3>How do I convince my boss that ReSharper is a valuable addition to our tool set?</h3>
<p>There's a presentation called <a href="/resharper/docs/resharper_benefits.pdf">ReSharper Benefits</a> (.pdf) that looks at ReSharper functionality from a
                        ROI perspective and provides a basic way to estimate how a development team benefits from
                        using ReSharper.</p>
<p>There's also <a href="/resharper/docs/ReSharper_DataSheet.pdf">ReSharper Data Sheet</a> (.pdf) that fits the most relevant information on ReSharper into
                        two print pages.</p>
</div>
</div>
<!--            <div class="wt-row wt-row_size_m">-->
<!--                <div class="wt-col-7">-->
<!--                    <h3>Is the latest ReSharper worth an upgrade from an older version?</h3>-->
<!--                    <p>Every new major release is a result of a whole year's effort by the ReSharper team, and it's-->
<!--                        usually well worth the money spent. To learn what ReSharper updates add compared to previous versions, please see the following comparison tables:-->
<!--                        </p>-->
<!--                    <ul>-->
<!--                        <li><a href="/resharper/documentation/resharper2017_2_vs_resharper2016_3.html">ReSharper 2017.2 vs. ReSharper 2016.3</a></li>-->
<!--                        <li><a href="/resharper/documentation/resharper2016_3_vs_resharper2016_2.html">ReSharper 2016.3 vs. ReSharper 2016.2</a></li>-->
<!--                        <li><a href="/resharper/documentation/resharper2016_2_vs_resharper2016_1.html">ReSharper 2016.2 vs. ReSharper 2016.1</a></li>-->
<!--                        <li><a href="/resharper/documentation/resharper2016_1_vs_resharper10.html">ReSharper 2016.1 vs. ReSharper 10</a></li>-->
<!--                        <li><a href="/resharper/documentation/resharper10_vs_resharper9.html">ReSharper 10 vs. ReSharper 9</a></li>-->
<!--                        <li><a href="/resharper/documentation/resharper9_vs_resharper8.html">ReSharper 9 vs. ReSharper 8</a></li>-->
<!--                        <li><a href="/resharper/documentation/resharper8_vs_resharper7.html">ReSharper 8 vs. ReSharper 7</a></li>-->
<!--                        <li><a href="/resharper/documentation/resharper7_vs_resharper6.html">ReSharper 7 vs. ReSharper 6</a></li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->
<div class="wt-row wt-row_size_m">
<div class="wt-col-7">
<h3>How do I learn ReSharper keyboard shortcuts?</h3>
<p>ReSharper is a great tool for everyone. However, keyboard-centric developers get additional value out
                        of it as it maps most of its actions to keyboard shortcuts. Use these cheat sheets to master
                        your ReSharper keyboard scheme of choice:</p>
<ul>
<li><a href="/resharper/docs/ReSharper_DefaultKeymap_VSscheme.pdf">ReSharper Default Keymap: Visual Studio scheme</a> (optimized for experienced Visual Studio
                            users, overrides as few native Visual Studio shortcuts as possible)
                        </li>
<li><a href="/resharper/docs/ReSharper_DefaultKeymap_IDEAscheme.pdf">ReSharper Default Keymap: ReSharper 2.x / IntelliJ IDEA scheme</a> (optimized for users of other JetBrains tools such as IntelliJ IDEA, PhpStorm and other IntelliJ-based IDEs)</li>
</ul>
</div>
<div class="wt-col-3 wt-col-lg-4 wt-offset-left-1">
<div class="screen-img _margin-bottom">
<img alt="ReSharper keyboard shortcuts" src="/resharper/documentation/img/resharper_shortcuts@2x.png" width="282.5">
</div>
</div>
</div>
<div class="wt-row wt-row_size_m">
<div class="wt-col-7">
<h3>How do I tweak ReSharper to my liking or according to my team standard?</h3>
<p>Default ReSharper settings aren't perfect for everyone. For example, you might want to modify
                        default naming rules or modify severity for certain code inspections. Refer to <a class="_external" href="//confluence.jetbrains.com/display/NETCOM/ReSharper+Customization+Guide">ReSharper
                            Customization Guide</a> for guidelines on these and other tweaks.</p>
<p>You can also use numerous <a href="/resharper/plugins">ReSharper plugins</a> that extend or modify ReSharper functionality, or
                        even create your own plugins, and <a class="_external" href="//www.jetbrains.com/resharper/devguide/">ReSharper Plugin Development Guide</a> is going to help you
                        with that.</p>
</div>
<div class="wt-col-3 wt-col-lg-4 wt-offset-left-1">
<div class="screen-img">
<img alt="ReSharper customization and plugin development guides" src="/resharper/documentation/img/resharper_guides@2x.png" width="289.5">
</div>
</div>
</div>
</div>
</div>    </div>

            
<div class="page__footer">
    <footer class="footer" id="footer">
        <div class="wt-container">
            <div class="footer__main wt-row wt-row_size_m wt-row-sm_direction_column-reverse">
                <div class="footer__logo wt-col-inline wt-display-md-none">
                    <div class="jetbrains-logo _size-3 _full-block">
                        <svg class="sprite-img jetbrains">
                            <use xlink:href="#jetbrains" />
                        </svg>
                    </div>
                </div>

                <div class="wt-col-auto-fill wt-col-sm-12">
                    <div class="wt-row wt-row_size_xs wt-row-sm_size_m wt-offset-top-12">
                        <div class="wt-col-inline footer-skeleton-button"></div>
                        <div class="wt-col-inline footer-skeleton-button"></div>
                        <div class="wt-col-inline footer-skeleton-button"></div>
                        <div class="wt-col-inline footer-skeleton-button"></div>
                    </div>

                    <div class="footer-skeleton-text-2 wt-offset-top-24" style="max-width: 45%"></div>
                    <div class="footer-skeleton-text-2 wt-offset-top-12" style="max-width: 70%"></div>
                </div>

                <div class="wt-col-inline wt-col-sm-12 wt-col_align-self_end wt-col-sm_align-self_start">
                    <div class="wt-row wt-row_size_m wt-row_justify_end wt-row-sm_justify_start">
                        <div class="wt-col-inline footer-skeleton-button" style="min-width: 180px"></div>
                        <div class="wt-col-inline footer-skeleton-button" style="min-width: 80px"></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
    </div>

<script>
(function () {
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      return uri + separator + key + "=" + value;
    }
  }

  var downloadLink = document.getElementById("download-link");
  if (downloadLink != null) {
    var platform = getParameterByName('platform');
    platform = platform != null ? platform : "windows";
    var href = downloadLink.getAttribute("href");
    var code = getParameterByName("code");

    if(code != null) {
      href = updateQueryStringParameter(href, "code", code)
    }
    href = updateQueryStringParameter(href, "platform", platform);
    downloadLink.setAttribute("href", href);
  }
})();
</script><script>
(function() {
  var STORAGE_KEY_NAME = 'firefoxDisappearedSVGWorkaround';
  var STORAGE_KEY_VALUE = '1';

  var isFirefox = /firefox/i.test(navigator.userAgent);
  if (!isFirefox || isFirefox && sessionStorage.getItem(STORAGE_KEY_NAME) === STORAGE_KEY_VALUE) {
    return;
  }

  var arrayFrom = function (arrayLike) {
    return Array.prototype.slice.call(arrayLike, 0);
  };

  function workaround() {
    var uses = document.querySelectorAll('.page svg use');
    var badNodesCount = 0;

    arrayFrom(uses).forEach(function (node) {
      var rect = node.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0)
        badNodesCount++;
    });

    if (badNodesCount === uses.length) {
      sessionStorage.setItem(STORAGE_KEY_NAME, STORAGE_KEY_VALUE);
      if (typeof dataLayer !== 'undefined')
        dataLayer.push({'firefoxDisappearedSVGWorkaround': STORAGE_KEY_VALUE});

      window.location.replace(window.location.href);
    }
  }

  window.addEventListener('DOMContentLoaded', workaround);

})();
</script>      <link href="/_assets/banner-rotator.entry.07ac548a2a68a7922693.css" rel="stylesheet" type="text/css">
      <script src="/_assets/banner-rotator.entry.b9ea3aaba598786010f0.js" type="text/javascript"></script>
      
      
  <script>
(function () {

  'use strict';

  function ImagesSrcReplacer () {

    var attribute = 'data-src';
    var matches = document.querySelectorAll('img[' + attribute + ']');

    for (var i = 0, n = matches.length; i < n; i++) {

      var attrValue = matches[i].getAttribute(attribute);

      if (_isHighDensity ()) {

        var name = attrValue.substring(0, attrValue.lastIndexOf('.'));
        var extention = attrValue.substring(attrValue.lastIndexOf('.'), attrValue.length);

        matches[i].setAttribute('src', name + '@2x' + extention);

      } else {
        matches[i].setAttribute('src', attrValue)
      }
    }

    /**
     * Detect high density
     * @returns {*|boolean}
     */
    function _isHighDensity () {
      return (
      (window.matchMedia &&
      (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches ||
       window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) ||
      (window.devicePixelRatio &&
       window.devicePixelRatio > 1.3));
    }
  }

  return new ImagesSrcReplacer()

}(document, window));
</script></body>
</html>
