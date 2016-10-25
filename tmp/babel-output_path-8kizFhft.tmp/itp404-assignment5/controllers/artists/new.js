define("itp404-assignment5/controllers/artists/new", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    actions: {
      addArtist: function addArtist() {
        var name = $("#name").val();
        var obj = {
          "name": name
        };
        $.post("http://itp-api.herokuapp.com/api/artists", obj);
        $("#name").val("");
        var mod = this.get("model");
        mod.pushObject(obj);
      }
    }
  });
});