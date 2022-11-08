import { useContext } from "react";
import { themeContext, style } from "./Theme";

export const BODY_PARTS = () => {
    const { theme } = useContext(themeContext);

    const HEAD = (
        <div
            key="HEAD"
            style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: `${style[theme as keyof typeof style].border}`,
                position: "absolute",
                top: "50px",
                right: "-30px",
            }}
        />
    );
    const BODY = (
        <div
            key="BODY"
            style={{
                width: "10px",
                height: "100px",
                background: `${style[theme as keyof typeof style].borderColor}`,
                position: "absolute",
                top: "120px",
                right: 0,
            }}
        />
    );
    const RIGHT_ARM = (
        <div
            key="RIGHT_ARM"
            style={{
                width: "100px",
                height: "10px",
                background: `${style[theme as keyof typeof style].borderColor}`,
                position: "absolute",
                top: "120px",
                right: 0,
                transform: "rotate(-50deg)",
                transformOrigin: "right bottom",
            }}
        />
    );
    const LEFT_ARM = (
        <div
            key="LEFT_ARM"
            style={{
                width: "100px",
                height: "10px",
                background: `${style[theme as keyof typeof style].borderColor}`,
                position: "absolute",
                top: "120px",
                right: "-90px",
                transform: "rotate(50deg)",
                transformOrigin: "left bottom",
            }}
        />
    );
    const LEFT_LEG = (
        <div
            key="LEFT_LEG"
            style={{
                width: "100px",
                height: "10px",
                background: `${style[theme as keyof typeof style].borderColor}`,
                position: "absolute",
                top: "210px",
                right: "-90px",
                transform: "rotate(50deg)",
                transformOrigin: "left bottom",
            }}
        />
    );
    const RIGHT_LEG = (
        <div
            key="RIGHT_LEG"
            style={{
                width: "100px",
                height: "10px",
                background: `${style[theme as keyof typeof style].borderColor}`,
                position: "absolute",
                top: "210px",
                right: 0,
                transform: "rotate(-50deg)",
                transformOrigin: "right bottom",
            }}
        />
    );

    return [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];
};
