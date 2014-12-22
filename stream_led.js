/**
 * stream button presses to a LED
 *
 * circuit:
 * https://learn.adafruit.com/assets/21908
 *
 */
var GpioStream = require('gpio-stream'),
    button = GpioStream.readable(17),
    led = GpioStream.writable(18);

// pipe the button presses to the LED
button.pipe(led);
