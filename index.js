var UiContainerPlugin = require('ui_container_plugin');
var JST = require('./jst');

class ClapprPlaybackNamePlugin extends UiContainerPlugin {
  get name() { return 'clappr_playback_name_plugin'; }

  render() {
    console.log("rendering", this.name);
    var style = $('<style>').html(JST.CSS[this.name]);
    this.$el.append(style);
    return this;
  }

}


module.exports = window.ClapprPlaybackNamePlugin = ClapprPlaybackNamePlugin;
