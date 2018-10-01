import React from "react";
import PropTypes from 'prop-types';

class IntroArticle extends React.Component
{
  render()
  {
    return (
      <a href={this.props.href}>
        <h3>{this.props.header}</h3>
        <p>{this.props.preview}</p>
      </a>
    );
  }
}

IntroArticle.propTypes = {
    href: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
};

IntroArticle.defaultProps = {
    href: "/",
    header: "",
    preview: ""
};

export default IntroArticle;