define("itp404-assignment5/routes/artists/artist", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    // console.log(params.id);
    model: function model(params) {
      var promise = $.ajax({
        url: "http://itp-api.herokuapp.com/api/artists/" + params.id + "/songs",
        type: 'get'
      });
      return promise.then(function (response) {
        console.log(response.songs);
        return response.songs;
      });
    }
  });
});