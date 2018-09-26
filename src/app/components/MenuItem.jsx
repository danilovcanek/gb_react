import React from "react";
import PropTypes from 'prop-types';

class MenuItem extends React.Component
{
  render()
  {
    return (<li class={this.props.className}>
      <a target="_blank" href={this.props.href}>
        <span>{this.props.children}</span>
      </a>
    </li>);
  }
}

MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
    children: "Главная (страница по умолчанию)",
    href: "/",
    class: ""
};

export default MenuItem;