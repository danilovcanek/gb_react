import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './app/components/Menu';
import HeaderLogo from './app/components/HeaderLogo'
import Button from './app/components/Button'

class App extends React.Component
{
  render(){
    const menuItems = [
      {href: "/", title: "Home"},
      {href: "/works", title: "Works"},
      {href: "/about", title: "About"},
      {href: "/contacts", title: "Contacts"},
      {href: "/hireus", title: "Hire us"},
    ];

    //JSX
    return (
      <div>
        <Menu items={menuItems} activeNumber={1} className={"side-nav"}></Menu>
        <HeaderLogo></HeaderLogo>
        <Button className="header--cta cta" arrowEnable={1}>AAA</Button>
      </div>
    )   
  }
}

//Выводим содержимое компонента в DOM
ReactDOM.render(<App/>, document.getElementById('app'));