import React from 'react';
import Sidebar from './Sidebar';

function WelcomePage() {
    return (
        <div style={{ marginLeft: '250px' }}>
            <h1>Welcome to My React Portfolio!</h1>
            <p>This is my portfolio where I showcase my skills and projects.</p>
            <noscript>
                <strong>We're sorry but My React Portfolio doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
            </noscript>
        </div>
    );
}

function App() {
    return (
        <div>
            <Sidebar />
            <WelcomePage />
        </div>
    );
}

export default App;
