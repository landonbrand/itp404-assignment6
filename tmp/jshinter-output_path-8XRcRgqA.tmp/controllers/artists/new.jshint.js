QUnit.module('JSHint | controllers/artists/new.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/artists/new.js should pass jshint.\ncontrollers/artists/new.js: line 6, col 18, \'$\' is not defined.\ncontrollers/artists/new.js: line 10, col 7, \'$\' is not defined.\ncontrollers/artists/new.js: line 11, col 7, \'$\' is not defined.\n\n3 errors');
});
