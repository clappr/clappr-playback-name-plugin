var UiContainerPlugin = require('ui_container_plugin');
var JST = require('.././jst');
var Styler = require('./styler')

class ClapprPlaybackNamePlugin extends UiContainerPlugin {

  get name() { return 'clappr_playback_name_plugin' }
  get template() { return JST.clappr_playback_name_plugin }
  
  get attributes() {
    return {
      'class': this.name,
      'data-clappr_playback_name_plugin': ''
    }
  }
  
  constructor(options) {
    super(options)
    this.render()
  }

  render() {
    var playback_name = this.container.playback.name
    this.$el.html(this.template({'playback_name':playback_name}))
    this.container.$el.append(this.el)

    var style = Styler.getStyleFor(this.name)
    this.$el.append(style)

    return this;
  }

}

module.exports = window.ClapprPlaybackNamePlugin = ClapprPlaybackNamePlugin;
