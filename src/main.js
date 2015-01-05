var UiContainerPlugin = require('ui_container_plugin');
var JST = require('.././jst');
var Styler = require('./styler')

class PlaybackName extends UiContainerPlugin {

  get name() { return 'playbackname' }
  get template() { return JST.playbackname }
  
  get attributes() {
    return {
      'class': this.name,
      'data-playbackname': ''
    }
  }
  
  constructor(options) {
    super(options)
    this.render()
  }

  render() {
    var playback_name = this.container.playback.name
    this.$el.html(this.template({'name':playback_name}))
    this.container.$el.append(this.el)

    var style = Styler.getStyleFor(this.name)
    this.$el.append(style)

    return this;
  }

}

module.exports = window.PlaybackName = PlaybackName;
