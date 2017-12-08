import React, {Component} from 'react';
import TreeNode from './components/TreeNode'
import TreeState from './states/TreeState'
import {toJS} from 'mobx';
import {observer} from 'mobx-react';

import './App.css';

@observer
class App extends Component {
	render() {
		return (
			<div className="container-fluid root">
				<div className="row">
					<div className="col-md-3 col-lg-3 sidebar">
						<TreeNode
							lists={toJS(TreeState.data)}
							toggle={TreeState.toggle}
						/>
					</div>
					<div className="col-md-9 col-lg-9 main">
						{!TreeState.prevClicked && !TreeState.lastClicked && <h1 className="blink">{`<=== Let's open this list`}</h1>}
						{TreeState.prevClicked && <h1>Prev Click=>{toJS(TreeState.prevClicked.Name)}</h1>}
						{TreeState.lastClicked && <h1>Last Click=>{toJS(TreeState.lastClicked.Name)}</h1>}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
