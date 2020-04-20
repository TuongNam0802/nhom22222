import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TodoPage from './pages/todo';

function App() {
    console.log('app render')
    return (
        <div className="App">
            <TodoPage />
        </div>
    );
}

export default App;
