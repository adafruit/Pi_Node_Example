/**
 *
 * stream button presses to a LED, and to
 * a web browser running on port 8080
 *
 * 1 == button press
 * 0 == button release
 *
 * circuit:
 * https://learn.adafruit.com/assets/21908
 *
 */
var GpioStream = require('gpio-stream'),
    http = require('http'),
    button = GpioStream.readable(17),
    led = GpioStream.writable(18);

var stream = button.pipe(led);

http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.write('<pre>logging button presses:\n');
  stream.pipe(res);
}).listen(8080);

console.log('starting HTTP server on http://localhost:8080');
