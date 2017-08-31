<!DOCTYPE html>
<html lang="en-us" class="layout-pf layout-pf-fixed transitions">

  <head ng-controller="Main.HeadController">
    <title>fabric8-console</title>
    <base href='/'></base>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css"/>

    <script src="libs-114b53d3.js"></script>
  </head>

  <body ng-controller="Main.BodyController">
    <nav class="navbar navbar-pf-vertical">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="fabric8 navbar-brand" href="/">
          <img class="navbar-brand-icon" ng-src="{{branding.appLogo}}"/>
        </a>
      </div>
      <nav class="fabric8 collapse navbar-collapse">
        <hawtio-breadcrumbs-outlet></hawtio-breadcrumbs-outlet>
        <ul class="nav navbar-nav navbar-right navbar-iconic">
          <li>
            <a class="nav-item-iconic" href="/help" title="View links to documentation and feedback">
              <span class="fa pficon-help" style="font-family: PatternFlyIcons-webfont;"></span>
            </a>
          </li>
          <li class="dropdown" ng-controller="Kubernetes.ServiceApps" ng-show="model.serviceApps.length" ng-include="'plugins/kubernetes/html/serviceApps.html'"></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle nav-item-iconic" data-toggle="dropdown">
              <span class="fa pficon-user" style="font-family: PatternFlyIcons-webfont;"></span>
              <span class="caret"></span>
            </a>
            <ul class="hawtio-user-dropdown dropdown-menu" hawtio-extension name="hawtio-user">
            </ul>
          </li>
        </ul>
      </nav>
    </nav>

    <hawtio-tabs-outlet></hawtio-tabs-outlet>

    <div id="main" class="container-fluid container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-secondary" ng-controller="HawtioNav.ViewController" hawtio-main-outlet>
      <div class="row" ng-class="getClass()">
        <div ng-include src="viewPartial"></div>
      </div>
    </div>

    <!-- add any scripts under dist/ here -->
    <script src="app-4be1b5bd.js"></script>

  </body>
</html>
