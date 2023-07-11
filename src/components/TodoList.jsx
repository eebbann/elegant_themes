import React from "react";
import map from "lodash/map";

import TodoItem from "./TodoItem";

const TodoList =(props)=> {
   const { todos, onComplete, onDelete } = props;
		 
	 const _renderTodos = ()=> {
    return todos.map(todos, (todo, index) => {
      return (
			<TodoItem key={index}
			 id={index} 
			 {...todo}
			 onComplete= {onComplete} 
			 onDelete ={onDelete}
			 />
			 )
    });
  }

  
    return <ul className="list-group todo-list">{_renderTodos()}</ul>;
   
}

export default TodoList;
