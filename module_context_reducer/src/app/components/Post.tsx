import { useThemeContext } from "../contexts/ThemeContext";

type Props = {
    title: string;
    subtitle: string;    
    onClick: () => void
}

export const Post = ({ title, subtitle, onClick }: Props) => {
    const themeContext = useThemeContext();

    return (
        <div>
            <h1 className={`text-2xl font-bold ${themeContext?.theme === "DARK" ? "text-white" : "text-black"}`}>{ title }</h1>
            <p className={`text-md font-normal ${themeContext?.theme === "DARK" ? "text-white" : "text-black"}`}>{ subtitle }</p>
            <button onClick={onClick} className="bg-blue-900 py-2 px-4 text-white">Remover</button>
        </div>
    )
}