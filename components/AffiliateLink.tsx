import React from "react";

export enum ProductType {
    ESP8266 = "ESP8266",
    ESP32 = "ESP32",
    Arduino = "Arduino",
    NeoPixel = "NeoPixel",
    MAX7219 = "MAX7219",
    Default = "Default"
}

export const Links: Record<ProductType, string> = {
    [ProductType.ESP8266]: "https://amzn.to/4hnDVaq",
    [ProductType.ESP32]: "https://amzn.to/3AgEodX",
    [ProductType.Arduino]: "https://amzn.to/4e8i589",
    [ProductType.NeoPixel]: "https://amzn.to/4foVTYu",
    [ProductType.MAX7219]: "https://amzn.to/3ArBX8t",
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
