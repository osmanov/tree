import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

export default class TreeNodeItem extends Component {

	static propTypes = {
		item: PropTypes.shape({
			Id: PropTypes.number.isRequired,
			Index: PropTypes.number.isRequired,
			Name: PropTypes.string.isRequired,
			LeafsType: PropTypes.string,
		}).isRequired,
		toggle: PropTypes.func.isRequired,
		children: PropTypes.node,
	};

	handleClick = (e) => {
		const {children, toggle, item} = this.props;
		const isTarget = (e.target === this.list);
		if (isTarget && children) {
			toggle(item);
		}
	}

	makeMeIcon=()=>{
		const {children, item: {Name, Opened}} = this.props;
		if(children){
			return Opened? <i class="fa fa-minus-square-o" aria-hidden="true"></i>:<i class="fa fa-plus-square-o" aria-hidden="true"></i>
		}
		return <i class="fa fa-dot-circle-o" aria-hidden="true"></i>;
	}

	render() {
		const {children, item: {Name, Opened}} = this.props;
		return (
			<li ref={list => (this.list = list)} className={classNames('item', {opened: !!Opened})}
					onClick={this.handleClick}>
				{this.makeMeIcon()}
				{Name}
				{Opened && children}
			</li>
		);
	}
}