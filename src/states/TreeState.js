import { observable, action } from 'mobx';

import verticals from '../data/verticals.json';
import categories from '../data/categories.json';
import courses from '../data/courses.json';
import {Parse} from '../utils';

class TreeState{
  
  @observable data =  Parse(verticals,categories,courses);
  @observable lastClicked=null;
  @observable prevClicked=null;

  @action
  toggle=(item)=> {
    this.prevClicked=this.lastClicked;
    this.lastClicked=item;
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
