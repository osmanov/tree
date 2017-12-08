import { observable, action, computed, runInAction } from 'mobx';
import shortid from 'shortid';

import Data from '../data.json';

class TreeState{
  
  @observable data = Data;

  @action
  toggle=(item)=> {
    if(item.parentNode){
        const {Index,LeafsType}=item.parentNode;
        return this.data[Index][LeafsType][item.Index].Opened=!this.data[Index][LeafsType][item.Index].Opened;
    }
    
    const willClose=this.data[item.Index].Opened;
    if(willClose){
        this.data[item.Index][item.LeafsType].forEach(leaf=>leaf.Opened=false)
    }
    this.data[item.Index].Opened=!willClose;
  }
}

export default new TreeState();
