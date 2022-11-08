import { useContext } from "react";
import { themeContext, style } from "../utilities/Theme";

const userDialogStyle: React.CSSProperties | undefined = {
    fontSize: "2rem",
    textAlign: "center",
    position: "absolute",
    zIndex: "1000",
    padding: "64px 32px",
    border: "1px solid #ffffff20",
    fontFamily: "sans-serif",
    top: "50%",
    transform: "translateY(-100%)",
};

type UserDialogProps = {
    isWinner: boolean;
    isLoser: boolean;
    reloadCallback: () => void;
};

export function UserDialog({ isWinner, isLoser, reloadCallback }: UserDialogProps) {
    const { theme } = useContext(themeContext);
    return (
        <>
            {(isLoser || isWinner) && (
                <div style={{ ...userDialogStyle, color: style[theme as keyof typeof style].foregroundColor, backdropFilter: `blur(8px) ${style[theme as keyof typeof style].brightness}` }}>
                    {isWinner && (
                        <>
                            <p>You Win 😁</p>
                            <br />
                            <span>
                                Press
                                <button style={{ padding: "8px 16px", margin: "8px", cursor: "pointer", border: "none" }} onClick={reloadCallback}>
                                    Enter
                                </button>
                                to try again
                            </span>
                        </>
                    )}
                    {isLoser && (
                        <>
                            <p>You Lose 😓</p>
                            <br />
                            <span style={{ alignItems: "center", display: "flex" }}>
                                Press
                                <button onClick={reloadCallback} style={{ padding: "8px 16px", margin: "8px", cursor: "pointer", border: "none" }}>
                                    Enter
                                </button>
                                to try again
                            </span>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
