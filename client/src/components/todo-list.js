import React from 'react';
import TodoListItem from './todo-list-item';

class TodoList extends React.Component {

  render() {
    return (
      <div
        id="todo-list"
        >{this.props.items.map(item => (
          <TodoListItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.done}
            onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem}
          />
        ))}
      </div>
    )
  }
}

export default TodoList;
