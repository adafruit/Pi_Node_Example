/**
 *
 * blink a LED
 *
 * the hello world of hardware. this
 * demonstrates the use of an anonymous
 * function passed to setInterval
 *
 * circuit:
 * https://learn.adafruit.com/assets/21908
 *
 */
var GPIO = require('onoff').Gpio,
    led = new GPIO(17, 'out');

// start a timer that runs the callback function every second
setInterval(function() {
  // get the current state of the LED
  var state = led.readSync();
  // write the opposite of the current state to the LED pin
  led.writeSync(!state);
}, 1000);
