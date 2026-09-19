import React from "react";

export enum ProductType {
    ESP8266 = "ESP8266",
    ESP32 = "ESP32",
    Arduino = "Arduino",
    NeoPixel = "NeoPixel",
    NeoMatrix = "NeoMatrix",
    MAX7219 = "MAX7219",
    I2CLCD = "I2CLCD",
    I2CLCD20X4 = "I2CLCD20x4",
    Buttons = "Buttons",
    Encoders = "Encoders",
    Default = "Default"
}

const AFFILIATE_TAG = "ecoreng06-20";

const search = (query: string) =>
    `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AFFILIATE_TAG}`;

export const Links: Record<ProductType, string> = {
    [ProductType.ESP8266]: search("esp8266"),
    [ProductType.ESP32]: search("esp32"),
    [ProductType.Arduino]: search("arduino"),
    [ProductType.NeoPixel]: search("ws2812b led"),
    [ProductType.NeoMatrix]: search("neopixel 8x8"),
    [ProductType.MAX7219]: search("max7219 led matrix"),
    [ProductType.I2CLCD]: search("i2c lcd 16x2"),
    [ProductType.I2CLCD20X4]: search("i2c lcd 20x4"),
    [ProductType.Buttons]: search("push button 12mm 16mm"),
    [ProductType.Encoders]: search("encoder arduino"),
    [ProductType.Default]: search("esp32")
}

export default function BoardLink({ type, title, children }: { type: ProductType, title?: string, children?: React.ReactNode }) {
    return <a href={Links[type]} 
        target="_blank"
        className="_underline _text-primary-600 _underline hover:_no-underline _decoration-from-font [text-underline-position:from-font]" 
        title={title}
        >
            {children ?? type}
        </a>
}
