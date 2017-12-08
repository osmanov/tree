import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TreeNodeItem extends Component {

    static propTypes = {
        item: PropTypes.shape({
          Id: PropTypes.number.isRequired,
          Index: PropTypes.number.isRequired,
          Name: PropTypes.string.isRequired,
          LeafsType: PropTypes.string,
        }).isRequired,
        toggle:PropTypes.func.isRequired,
        children: PropTypes.node,
      };

      handleClick=(e)=>{
        const { children,toggle,item } = this.props;
        const isTarget = (e.target === this.list);
        if (isTarget && children) {
          toggle(item);
        }
      }

  render() {
    const { children,item } = this.props;

    return (
      <li ref={list => (this.list = list)} onClick={this.handleClick}>
       {item.Name}
        {item.Opened && children}
      </li>
    );
  }
}