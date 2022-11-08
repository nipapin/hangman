import { useContext } from "react";
import { BODY_PARTS } from "../utilities/Drawings";
import { style, themeContext } from "../utilities/Theme";

type HangmanDrawingProps = {
    numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    const { theme } = useContext(themeContext);
    return (
        <div style={{ position: "relative" }}>
            {BODY_PARTS().slice(0, numberOfGuesses)}
            <div style={{ height: "50px", width: "10px", background: `${style[theme as keyof typeof style].borderColor}`, position: "absolute", top: 0, right: 0 }} />
            <div style={{ height: "10px", width: "200px", background: `${style[theme as keyof typeof style].borderColor}`, marginLeft: "120px" }} />
            <div style={{ height: "400px", width: "10px", background: `${style[theme as keyof typeof style].borderColor}`, marginLeft: "120px" }} />
            <div style={{ height: "10px", width: "250px", background: `${style[theme as keyof typeof style].borderColor}` }} />
        </div>
    );
}
