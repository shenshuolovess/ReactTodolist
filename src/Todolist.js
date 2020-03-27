import React,{Component} from 'react';
import ListItem from './ListItem';
import NewItem from './NewItem';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={ 
            todolist:
           [{content:'eat time',done:true},
            {content:'game time',done:false},
            {content:'sleep time',done:false}]
        }

    }

    addNewItem=(newItemContent)=>{
        const newList=[...this.state.todolist,{content:newItemContent,done:false}];
        this.setState({
            todolist: newList
        })
    }

    changeItem=(index)=>{
        const alist=[...this.state.todolist]
        alist[index].done=true
        this.setState({
            alist
        })
    } 

    render(){
            return (
              <div>
                {
                 this.state.todolist.map((item,index) =><ListItem item={item} key={index} index={index} changeItem={this.changeItem}/>)               
                }
                < NewItem addItem={this.addNewItem}/>
              </div>
            );
    }
}
export default TodoList;