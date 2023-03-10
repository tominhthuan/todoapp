import React, { Component } from 'react';

import tick from './img/tick.png';
//component
import TodoList from './component/TodoList';

//css
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      todolist: [
        { title: "thuan di choi", isComplete: true },
        { title: "thuan o nha", isComplete: true },
        { title: "thuan di hoc" }
      ]
    }
  }
  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todolist } = this.state;
      const index = todolist.indexOf(item);
      this.setState({
        todolist: [
          ...todolist.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todolist.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(event) {
    console.log(event.target.value);
  }
  render() {
    const { todolist } = this.state;
    return (
      <div className="todoapp">
        <div className='Header'>
          <img src={tick} alt='#' width={30} height={30} />
          <input type='text' placeholder='Add a new item' onKeyUp={this.onKeyUp} />
        </div>
        {
          todolist.map((item, index) =>
            <TodoList
              key={index}
              item={item}
              onClick={this.onItemClick(item)}
            />
          )
        }

      </div>
    );
  }
}

export default App;