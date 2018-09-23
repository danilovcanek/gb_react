import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    render(){
        //JSX
        return <div>
            <h1>Первое приложение на React</h1>
            <p>Hello React!</p>
        </div>;
    }
}

//Выводим содержимое компонента в DOM
ReactDOM.render(<App/>, document.getElementById('root'));