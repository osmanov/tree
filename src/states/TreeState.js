import { observable, action, computed, runInAction } from 'mobx';
import shortid from 'shortid';

import verticals from '../verticals.json';
import categories from '../categories.json';
import courses from '../courses.json';
import {Union} from '../utils';

class TreeState{
  
  @observable data =  Union(verticals,categories,courses);

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
