import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component{
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
      }
    change() {
        const {changeItem, index} = this.props
        changeItem(index)
    }
    render(){
        const item=this.props.item
        if(item.done){
            return <pre className="done-item">{item.content}     已完成</pre> 

        }else{
            return <pre className="item" onClick={this.change}>{item.content}      未完成</pre>
        }
    }
}

export default ListItem;