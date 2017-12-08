import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import TreeNodeItem from './Item';
import TreeNodeList from './List';

export default class TreeNode extends Component {
  static propTypes = {
    lists: PropTypes.array,
    parentNode: PropTypes.object,
  };

  render() {
    const { lists,parentNode , ...other } = this.props;

    return (
      <TreeNodeList>
        {
          lists.map((node,Index) => {
            const { Name,Id,Categories,Courses,Opened}=node;
            const leafs=Categories || Courses;

             const item={ 
              Name, 
              Opened,
              Id,
              Index,
              LeafsType:leafs?(Categories?'Categories':'Courses'):null,
              parentNode:parentNode||null
            };

            return (
              <TreeNodeItem
                {...other}
                key={shortid.generate()}
                item={item}
              >
                {
                  leafs && (
                    <TreeNode
                      {...other}
                      parentNode={{
                        ...node,
                        Index,
                        LeafsType:Categories?'Categories':'Courses',
                        parentNode:parentNode||null
                      }}
                      lists={leafs}
                    />
                  )
                }
              </TreeNodeItem>
            );
          })
        }
      </TreeNodeList>
    );
  }
}
