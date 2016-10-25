define('itp404-assignment5/tests/helpers/start-app', ['exports', 'ember', 'itp404-assignment5/app', 'itp404-assignment5/config/environment'], function (exports, _ember, _itp404Assignment5App, _itp404Assignment5ConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _itp404Assignment5ConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _itp404Assignment5App['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});