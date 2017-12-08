import React, { Component } from 'react';
import TreeNode from './components/TreeNode'
import TreeState from './states/TreeState'
import { toJS } from 'mobx';
import {  observer } from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <TreeNode
              lists={toJS(TreeState.data)}
              toggle={TreeState.toggle}
            /> 
      </div>
    );
  }
}

export default App;
