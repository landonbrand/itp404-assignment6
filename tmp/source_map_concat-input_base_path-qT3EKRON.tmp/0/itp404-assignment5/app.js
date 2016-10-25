define('itp404-assignment5/app', ['exports', 'ember', 'itp404-assignment5/resolver', 'ember-load-initializers', 'itp404-assignment5/config/environment'], function (exports, _ember, _itp404Assignment5Resolver, _emberLoadInitializers, _itp404Assignment5ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _itp404Assignment5ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp404Assignment5ConfigEnvironment['default'].podModulePrefix,
    Resolver: _itp404Assignment5Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _itp404Assignment5ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});