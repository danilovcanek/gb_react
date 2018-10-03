import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';
import Introduction_visual from './../img/introduction-visual.png'
import IntroArticle from './IntroArticle'

class ContentInto extends React.Component
{
  render(){
    let classItem = "l-section section";
    classItem += this.props.className;
    
    return (
      <li className={classItem}>
        <div class="intro">
          <div class="intro--banner">
            <h1>Your next<br />interactive<br />experience</h1>
            <Button className="cta" arrowEnable={1}>Hire us</Button>
            <img src={Introduction_visual} alt="Welcome" />                
          </div>     
          <div class="intro--options">
            <IntroArticle href="/" header="Metiew &amp; Smith" preview="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do."/>
            <IntroArticle href="/" header="Fantasy interactive" preview="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do."/>
            <IntroArticle href="/" header="Paul &amp; shark" preview="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do."/>
          </div>   
        </div>
      </li>
    );
  }
}

//Свойства по умолчанию
ContentInto.defaultProps = {
  // items: [],
  // activeNumber: 0,
  className: ""
};

//Проверка типов
ContentInto.propTypes = {
  // items: PropTypes.array.isRequired,
  // activeNumber: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};

export default ContentInto;