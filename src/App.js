import React from 'react';
import ReactDOM from 'react-dom';
let aboutDeveloperModule = require('./moduleAboutDeveloper');

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

const app = document.getElementById('app');

ReactDOM.render(
    <div onClick={()=>{
        var now = new Date();
        alert( now );
    }}>
        Второе приложение на React
    </div>,
app);

let aboutDeveloperInstance = new aboutDeveloperModule.AboutDeveloper('Aleksandr', 'Danolov');
aboutDeveloperInstance.showInfo();