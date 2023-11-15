ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
basic.forever(function () {
    if (ESP8266_IoT.wifiState(false)) {
        ESP8266_IoT.connectWifi("wifiyann", "147896325123698745")
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Yes)
    }
    basic.pause(2000)
    basic.clearScreen()
    ESP8266_IoT.connectKidsiot("21da4Q0oMu4dQWeR", "1")
    basic.pause(1000)
    if (ESP8266_IoT.kidsiotState(true)) {
        basic.showString("T")
        basic.pause(1000)
        basic.clearScreen()
        ESP8266_IoT.uploadKidsiot(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
        basic.showArrow(ArrowNames.East)
        basic.pause(2000)
        basic.clearScreen()
        ESP8266_IoT.disconnectKidsiot()
    }
    ESP8266_IoT.connectKidsiot("21da4Q0oMu4dQWeR", "2")
    basic.pause(1000)
    if (ESP8266_IoT.kidsiotState(true)) {
        basic.showString("H")
        basic.pause(1000)
        basic.clearScreen()
        ESP8266_IoT.uploadKidsiot(Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
        basic.showArrow(ArrowNames.East)
        basic.pause(2000)
        basic.clearScreen()
        ESP8266_IoT.disconnectKidsiot()
        basic.pause(840000)
    }
})
