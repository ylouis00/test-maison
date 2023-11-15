ESP8266_IoT.init_wifi(SerialPin.P8, SerialPin.P12, BaudRate.BAUD_RATE115200)

def on_forever():
    if ESP8266_IoT.wifi_state(False):
        ESP8266_IoT.connect_wifi("wifiyann", "147896325123698745")
        basic.pause(1000)
    else:
        basic.show_icon(IconNames.YES)
    basic.pause(2000)
    basic.clear_screen()
    if ESP8266_IoT.kidsiot_state(False):
        ESP8266_IoT.connect_kidsiot("21da4Q0oMu4dQWeR", "1")
        basic.pause(1000)
    else:
        basic.show_icon(IconNames.HAPPY)
        basic.pause(1000)
        basic.clear_screen()
        ESP8266_IoT.upload_kidsiot(Environment.octopus_BME280(Environment.BME280_state.BME280_TEMPERATURE_C))
        basic.show_arrow(ArrowNames.EAST)
        basic.pause(2000)
        basic.clear_screen()
basic.forever(on_forever)
