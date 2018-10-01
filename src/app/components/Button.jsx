import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component
{
  render()
  {
    let arrow = 
      <button class={this.props.className}>{this.props.children}
      </button>;
    if(this.props.arrowEnable){
      arrow = (
        <button class={this.props.className}>{this.props.children}
          <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 118'>
              <path d='M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z'
              transform='matrix(.1 0 0 -.1 0 118)' />
          </svg>
          <span class="btn-background"></span>
        </button>
      );
    }
    console.log(this.props);
    console.log("ddd");
    console.log(arrow);
  
    return (
      <div>   
        {arrow} 
      </div>
      // <button class={this.props.className}>{this.props.children}
      // </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  arrowEnable: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  className: "",
  arrowEnable: 0,
  children: "Hire us"
};

export default Button;