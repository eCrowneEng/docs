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

export const Links: Record<ProductType, string> = {
    [ProductType.ESP8266]: "https://amzn.to/4hnDVaq",
    [ProductType.ESP32]: "https://amzn.to/3AgEodX",
    [ProductType.Arduino]: "https://amzn.to/4e8i589",
    [ProductType.NeoPixel]: "https://amzn.to/4foVTYu",
    [ProductType.NeoMatrix]: "https://amzn.to/48HiZav",
    [ProductType.MAX7219]: "https://amzn.to/3ArBX8t",
    [ProductType.I2CLCD]: "https://amzn.to/48IqmyG",
    [ProductType.I2CLCD20X4]: "https://amzn.to/3NXJOh6",
    [ProductType.Buttons]: "https://amzn.to/4epK4jZ",
    [ProductType.Encoders]: "https://amzn.to/4fCVu4M",
    [ProductType.Default]: "https://amzn.to/3AgEodX"
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
