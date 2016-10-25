define('itp404-assignment5/routes/artists', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var promise = $.ajax({
        url: "http://itp-api.herokuapp.com/api/artists",
        type: 'get'
      });
      return promise.then(function (response) {
        // console.log(response.artists);
        return response.artists;
      });
    },

    actions: {
      invalidateModel: function invalidateModel() {
        this.refresh();
      }
    }
  });
});