define('itp404-assignment5/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'itp404-assignment5/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _itp404Assignment5ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_itp404Assignment5ConfigEnvironment['default'].APP.name, _itp404Assignment5ConfigEnvironment['default'].APP.version)
  };
});