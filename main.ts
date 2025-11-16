basic.showIcon(IconNames.House)
huskylens.initI2c()
let distanza = 0
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    distanza = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    if (distanza != 0) {
        if (distanza <= 18) {
            for (let index = 0; index < 4; index++) {
                huskylens.takePhotoToSDCard(HUSKYLENSphoto.PHOTO)
                basic.pause(200)
            }
            basic.showNumber(distanza)
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.Duck)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
