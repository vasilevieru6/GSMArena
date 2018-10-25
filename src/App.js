import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import './App.css';

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename='/'>
                <AppContainer />
            </BrowserRouter>
        );
    }
}

export default App;