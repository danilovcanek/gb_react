import React from "react";
import PropTypes from 'prop-types';

class HeaderLogo extends React.Component
{
  render()
  {
    return (
      <a class={this.props.className} href={this.props.href}>
        <img src={this.props.imgSrc} alt={this.props.children}></img>
        <p>{this.props.children}</p>
      </a>
    );
  }
}

HeaderLogo.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

HeaderLogo.defaultProps = {
  className: "header--logo",
  href: "/",  
  imgSrc: "assets/img/logo.png",
  children: "Global"
};

export default HeaderLogo;