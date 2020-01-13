import React from 'react';
import './App.css';
import NavBar from "./nav/NavBar";
import Container from "./pages/Container";

function App() {
    return (
        <div className="app">
            <NavBar/>
            <Container/>
        </div>
    );
}

export default App;
