basic.forever(function () {
    serial.writeValue("x", sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
    basic.pause(1000)
})
