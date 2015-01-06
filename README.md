# Clappr Playback's Name Plugin

<img src="https://raw.githubusercontent.com/barbosa/clappr-playback-name-plugin/master/screenshot.png"/>

## Usage

Add both Clappr and Playback's Name plugin scripts to your HTML:

```html
<head>
  <script type="text/javascript" src="http://cdn.clappr.io/latest/clappr.min.js"></script>
  <script type="text/javascript" src="dist/playbackname.js"></script>
</head>
```

Then just add `PlaybackName` into the list of plugins of your player instance:

```javascript
var player = new Clappr.Player({
  source: "http://your.video/here.mp4",
  plugins: {
    'container': [PlaybackName]
  }
});
```
