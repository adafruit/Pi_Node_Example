/**
 *
 * stream button presses to the console
 *
 * 1 == button press
 * 0 == button release
 *
 * circuit:
 * https://learn.adafruit.com/assets/21908
 *
 */
var GpioStream = require('gpio-stream'),
    button = GpioStream.readable(17);

// pipe the button presses to stdout
button.pipe(process.stdout);
