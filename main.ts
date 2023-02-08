basic.forever(function () {
    serial.writeValue("kyori", pins.analogReadPin(AnalogPin.P2))
    if (pins.analogReadPin(AnalogPin.P2) > 500) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    }
})
