define('itp404-assignment5/tests/helpers/resolver', ['exports', 'itp404-assignment5/resolver', 'itp404-assignment5/config/environment'], function (exports, _itp404Assignment5Resolver, _itp404Assignment5ConfigEnvironment) {

  var resolver = _itp404Assignment5Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itp404Assignment5ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp404Assignment5ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});