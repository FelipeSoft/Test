import { Link } from 'react-router-dom';
import './App.css';
import { MainRoutes } from './routes/MainRoutes';

function App() {
    return (
        <div className="App">
            <nav>
                <ul className='navbar'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <MainRoutes />
        </div>
    );
}

export default App;
