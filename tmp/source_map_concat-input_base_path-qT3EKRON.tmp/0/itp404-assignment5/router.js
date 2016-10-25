define('itp404-assignment5/router', ['exports', 'ember', 'itp404-assignment5/config/environment'], function (exports, _ember, _itp404Assignment5ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _itp404Assignment5ConfigEnvironment['default'].locationType,
    rootURL: _itp404Assignment5ConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('artists', function () {
      this.route('artist', { path: 'artist/:id' });
    });
  });

  exports['default'] = Router;
});