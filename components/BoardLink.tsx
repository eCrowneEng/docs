import React from "react";

export enum BoardType {
    ESP8266 = "ESP8266",
    ESP32 = "ESP32",
    Arduino = "Arduino"
}

export const BoardLinks: Record<BoardType, string> = {
    [BoardType.ESP8266]: "https://amzn.to/4hnDVaq",
    [BoardType.ESP32]: "https://amzn.to/3AgEodX",
    [BoardType.Arduino]: "https://amzn.to/4e8i589"
}

export default function BoardLink({ type, title }: { type: BoardType, title?: string }) {
    return <a href={BoardLinks[type]} 
        className="_underline _text-primary-600 _underline hover:_no-underline _decoration-from-font [text-underline-position:from-font]" 
        title={title}
        >
            {type}
        </a>
}
