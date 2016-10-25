define('itp404-assignment5/components/song-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isPopular: (function () {
      return this.get('song.playCount') > 20;
    }).property('song.playCount'),

    isExpensive: (function () {
      console.log(this.get('song.price'));
      return this.get('song.price') > 1;
    }).property('song.price')
  });
});