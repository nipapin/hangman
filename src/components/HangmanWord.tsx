import { useContext } from "react";
import { themeContext, style } from "../utilities/Theme";

type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
};

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
    const { theme } = useContext(themeContext);
    return (
        <div style={{ display: "flex", gap: "0.25em", fontSize: "6rem", textTransform: "uppercase", fontFamily: "monospace" }}>
            {wordToGuess.split("").map((letter, index) => {
                return (
                    <span key={index} style={{ borderBottom: `${style[theme as keyof typeof style].border}` }}> 
                        <span
                            style={{
                                visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                                color: !guessedLetters.includes(letter) || reveal ? `${style[theme as keyof typeof style].errorColor}` : `${style[theme as keyof typeof style].foregroundColor}`,
                            }}
                        >
                            {letter}
                        </span>
                    </span>
                );
            })}
        </div>
    );
}
