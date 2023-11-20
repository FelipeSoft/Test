import { useAppSelector } from "./redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/UserReducer";
import { setThemeStatus } from "./redux/reducers/ThemeReducer";

const App = () => {
    const user = useAppSelector(state => state.user);
    const theme = useAppSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value));
    }

    const handleAgeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setAge(e.target.value));
    }

    const handleToggleTheme = () => {
        dispatch(setThemeStatus(theme.status === "light" ? "dark" : "light"));
    }
    
    return(
        <div className={`h-screen
            ${theme.status === "light" && "text-black bg-white"}
            ${theme.status === "dark" && "text-white bg-black"}
        `}>
            <p>Meu nome é {user.name} e tenho {user.age} anos.</p>
            <h1>Tema: {theme.status}</h1>

            <hr />
            <input type="text" value={user.name} onChange={handleNameInput} />
            <input type="text" value={user.age} onChange={handleAgeInput} />

            <hr />
            <button onClick={handleToggleTheme}>Mudar Tema</button>
        </div>
    )
}
export default App;