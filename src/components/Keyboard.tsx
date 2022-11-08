import { KEYS } from "../utilities/KEYS";
import dark from "../styles/Keyboard__Dark.module.css";
import light from "../styles/Keyboard__Light.module.css";
import { useContext } from "react";
import { themeContext, style } from "../utilities/Theme";

type KeyboardProps = {
    disabled?: boolean;
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
};

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps) {
    const { theme } = useContext(themeContext);
    const styles = theme === "light" ? light : dark;
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: "0.5rem", userSelect: "none" }}>
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return (
                    <button
                        disabled={isActive || isInactive || disabled}
                        key={key}
                        className={`${styles.button} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
                        style={{
                            color: `${style[theme as keyof typeof style].foregroundColor}`,
                            borderColor: `${style[theme as keyof typeof style].foregroundColor}`,
                        }}
                        onClick={() => addGuessedLetter(key)}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
}
