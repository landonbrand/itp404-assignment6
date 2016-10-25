define('itp404-assignment5/tests/routes/artists/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/artists/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artists/new.js should pass jshint.\nroutes/artists/new.js: line 4, col 9, \'params\' is defined but never used.\n\n1 error');
  });
});