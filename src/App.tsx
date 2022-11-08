import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
import { BODY_PARTS } from "./utilities/Drawings";
import words from "./utilities/wordList.json";
import { themeContext, style } from "./utilities/Theme";
import { UserDialog } from "./components/UserDialog";
const getWord = () => {
    return words[Math.floor(Math.random() * words.length)];
};

function App() {
    const [appTheme, setAppTheme] = useState<any>("light");
    const [wordToGuess, setWordToGuess] = useState<string>(getWord());
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

    const isLoser = incorrectLetters.length >= BODY_PARTS().length;
    const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));

    const toggleTheme = () => setAppTheme((prev: any) => (prev === "light" ? "dark" : "light"));

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isWinner || isLoser) return;
            setGuessedLetters((currentLetters) => [...currentLetters, letter]);
        },
        [guessedLetters, isWinner, isLoser],
    );

    const reloadCallback = () => {
        setGuessedLetters([]);
        setWordToGuess(getWord());
    };

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key;
            if (!key.match(/^[a-z]$/)) return;

            event.preventDefault();
            addGuessedLetter(key);
        };
        document.addEventListener("keypress", handler);
        return () => document.removeEventListener("keypress", handler);
    }, [guessedLetters]);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key;
            if (key !== "Enter") return;

            event.preventDefault();
            setGuessedLetters([]);
            setWordToGuess(getWord());
        };
        document.addEventListener("keypress", handler);
        return () => document.removeEventListener("keypress", handler);
    }, []);
    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key;
            if (key === " ") {
                toggleTheme();
                return;
            }
        };
        document.addEventListener("keypress", handler);
        return () => document.removeEventListener("keypress", handler);
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = style[appTheme as keyof typeof style].backgroundColor;
        document.body.style.color = style[appTheme as keyof typeof style].foregroundColor;
    }, [appTheme]);

    return (
        <themeContext.Provider value={{ theme: appTheme, setTheme: toggleTheme }}>
            <button onClick={toggleTheme}>Change Theme</button>
            <div
                style={{
                    maxWidth: "800px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    margin: "0 auto",
                    alignItems: "center",
                }}
            >
                <UserDialog isLoser={isLoser} isWinner={isWinner} reloadCallback={reloadCallback} />
                <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
                <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
                <div style={{ alignSelf: "stretch" }}>
                    <Keyboard
                        disabled={isWinner || isLoser}
                        activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
                        inactiveLetters={incorrectLetters}
                        addGuessedLetter={addGuessedLetter}
                    />
                </div>
            </div>
        </themeContext.Provider>
    );
}

export default App;
