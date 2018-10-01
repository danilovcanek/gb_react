import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';
import HeaderLogo from './HeaderLogo';
import logoImg from './../img/logo.png';

class Header extends React.Component
{
  render()
  {
    console.log(this.props);
    function menuClick() {
      $(".perspective").addClass("perspective--modalview"),setTimeout(function(){$(".perspective").addClass("effect-rotate-left--animate")},25),$(".outer-nav, .outer-nav li, .outer-nav--return").addClass("is-vis");
      console.log("dddhhhh");
    }
    return (
      <header className="header">
        <HeaderLogo imgSrc={logoImg} />
        <Button className="header--cta cta" arrowEnable={0}>AAA</Button>
        <div class="header--nav-toggle" onClick={menuClick}>
          <span></span>
        </div>
      </header>
    );
  }
}

export default Header;