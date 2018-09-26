import React from "react";
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

class Menu extends React.Component
{
  render(){
    // console.log(this.props);

    let items = this.props.items.map((item, index) => {
      let className = "";
      // console.log(item, index, this.props.activeNumber);
      if(index == this.props.activeNumber){
        className = "is-active";
      }
      // console.log(itemClass);
      return <MenuItem key={index} href={item.href} className={className}>{item.title}</MenuItem>;
    });
    // console.log(items);

    let className=this.props.className;

    return (
      <nav class="l-side-nav">
        <ul class={className}>
          {items}
        </ul>
      </nav>
    );
  }
}

//Свойства по умолчанию
Menu.defaultProps = {
  items: [],
  activeNumber: 0,
  className: ""
};

//Проверка типов
Menu.propTypes = {
  items: PropTypes.array.isRequired,
  activeNumber: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};

export default Menu;