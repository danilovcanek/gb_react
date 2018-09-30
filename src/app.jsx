import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/main.css';
import Menu from './app/components/Menu';
import Header from './app/components/Header';
import ContentInto from './app/components/ContentInto';
import MyLargeModal from './app/components/MyLargeModal';
// import Button from 'react-bootstrap';

class App extends React.Component
{
  constructor(props, context) {
    super(props, context);

    this.state = {
      lgShow: false
    };
  }

  render(){
    const menuItems = [
      {href: "/", title: "Home"},
      {href: "/works", title: "Works"},
      {href: "/about", title: "About"},
      {href: "/contacts", title: "Contacts"},
      {href: "/hireus", title: "Hire us"},
    ];

    let lgClose = () => this.setState({ lgShow: false });

    //JSX
    return (
      <div>
        <div className="perspective effect-rotate-left">
          <div className="container">
            <div id="viewport" class="l-viewport">
              <div class="l-wrapper">
                <Header />
                <Menu items={menuItems} activeNumber={0} className="side-nav"/>
                <ul class="l-main-content main-content">
                  <ContentInto className="section--is-active"/>
                </ul>
              </div>
            </div>
          </div>
        </div> 
        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
      </div>
    )   
  }

  componentDidMount()
  {
    console.log('4. componentDidMount()');
    this.setState({ lgShow: true })
  }  
}

//Выводим содержимое компонента в DOM
ReactDOM.render(<App/>, document.getElementById('app'));