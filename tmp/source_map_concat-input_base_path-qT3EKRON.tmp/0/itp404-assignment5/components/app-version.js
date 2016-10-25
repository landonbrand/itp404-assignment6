define('itp404-assignment5/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'itp404-assignment5/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _itp404Assignment5ConfigEnvironment) {

  var name = _itp404Assignment5ConfigEnvironment['default'].APP.name;
  var version = _itp404Assignment5ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});