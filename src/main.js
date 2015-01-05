var UiContainerPlugin = require('ui_container_plugin');
var JST = require('.././jst');
var Styler = require('./styler')

class ClapprPlaybackNamePlugin extends UiContainerPlugin {

  get name() { return 'clappr_playback_name_plugin' }
  get template() { return JST.clappr_playback_name_plugin }
  
  get attributes() {
    return {
      'id': this.name
    }
  }
  
  constructor(options) {
    super(options)
    this.render()
  }

  render() {
    console.log("rendering", this.name)
    var style = Styler.getStyleFor(this.name)
    this.$el.html(this.template())
    this.$el.append(style)
    this.container.$el.append(this.el)
    return this;
  }

}

module.exports = window.ClapprPlaybackNamePlugin = ClapprPlaybackNamePlugin;
