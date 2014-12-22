# Node.js Examples for the Raspberry Pi

This repo is part of the [Node.js Embedded Development on the Raspberry Pi][1] guide.

## Installing

Run the following on your Raspberry Pi. This is assuming you have already [installed node.js][2].

    $ git clone https://github.com/adafruit/Pi_Node_Example.git ~/pi_examples && cd pi_examples
    $ npm install

## Accessing GPIO without running scripts as root

The Raspberry Pi's GPIO pins require you run scripts as the root user to access them.
Because it's not safe to run scripts as the root user, we can install
[quick2wire-gpio-admin](https://github.com/quick2wire/quick2wire-gpio-admin) to avoid this.

Run this on your Raspberry Pi:

```
git clone git://github.com/quick2wire/quick2wire-gpio-admin.git ~/quick2wire-gpio-admin && cd ~/quick2wire-gpio-admin
make
sudo make install
sudo adduser $USER gpio
```

In the examples, we are going to use pins 17 & 18, so let's export them so your user can access them.

```
gpio-admin export 17
gpio-admin export 18
```

## Included Examples

* `node blink.js` - blink a LED attached to GPIO pin 18 every second.
* `node stream_stdout.js` - demonstrates the use of node.js streams by piping button presses to the terminal
* `node stream_led` - demonstrates the use of node.js streams by piping button presses to a LED attached on pin 18
* `node stream_browser.js` - a more complex example that demonstrates the use of node.js streams by piping button presses to a LED and a web browser

## Circuit

![Circuit](https://learn.adafruit.com/system/assets/assets/000/021/908/original/raspberry_pi_pi_fritzing.png?1419035674)

This shows the circuit you will need to connect in order to run this example code. If
you would like more info, please visit [the guide][1].

## License
Copyright (c) 2014 Adafruit Industries. Licensed under the MIT license.

[1]: https://learn.adafruit.com/node-embedded-development
[2]: https://learn.adafruit.com/node-embedded-development/installing-node-dot-js
