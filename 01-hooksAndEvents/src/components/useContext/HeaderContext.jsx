import { useContext } from "react";
import ThemeContext from "./themeContext";


const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
    
        <header style={{
            background: theme === "light" ? "#eee" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            padding: "1rem"
        }}>
            <h1>Meu APP</h1>
            <button onClick={toggleTheme}>
                alterar tema
            </button>
        </header>
    )
}

// exporta o Header como export default para uso em outros módulos
export default Header;