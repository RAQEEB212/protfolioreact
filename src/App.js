import './App.css';
import MyNavbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div>
            <MyNavbar/>
            <div style={{ display: 'flex', marginTop: '70px' }}>
                <Sidebar/>
                <div style={{ marginLeft: '250px' }}>
                    <WelcomePage/>
                </div>
            </div>
        </div>
    );
}

export default App;
