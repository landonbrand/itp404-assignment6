QUnit.module('JSHint | routes/artists.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/artists.js should pass jshint.\nroutes/artists.js: line 5, col 20, \'$\' is not defined.\n\n1 error');
});
