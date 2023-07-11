import React, { useState, useEffect } from "react";

import TodoList from "./components/TodoList";

const App = () => {
	const [title, setTitle] = useState('');
	const [todos, setTodos] = useState([]);
	//useEffcet introduced to handle side effect
	useEffect(() => {
		const storedTodos = localStorage.getItem('et-todos');
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []);


	useEffect(() => {
		localStorage.setItem("et-todos", JSON.stringify(this.state.todos));
	}, [todos]);



	const _onCompleteTodo = (id) => {
		const updatedTodos = [...todos];
		updatedTodos[id].complete = !updatedTodos[id].complete;
		setTodos(updatedTodos);
	};
	// addedthe delete function 
	const _onItemDelete = (id) => {
		setTodos((prev) => prev.filter((_, index) => index !== id));
	};
	const _onChangeTitle = (event) => {
		setTitle(event.target.value);
	};



	const _onEnterPressAdd = (event) => {
		if (event.keyCode === 13) {
			_onClickAdd();
		}
	};

	const _onClickAdd = (event) => {
		const updatedTodos = [
			...todos, {
				complete: false,
				title:title
			},
		];
		setTitle("");
		setTodos(updatedTodos);
	};

	const _renderHeader = () => {
    return (
      <div className="todos-app-header card-header">
        <h2>ToDo</h2>
        <div className="input-group">
          <input
            className="form-control add-new-todo"
            name="title"
            onChange={_onChangeTitle}
            onKeyDown={_onEnterPressAdd}
            placeholder="What do you need to do?"
            type="text"
            value={title}
          />
					<div className="input-group-append">
						<button
							className="btn btn-success"
							type="button"
							onClick={this._onClickAdd}
						>
							<span
								className=""
								style={{
									fontSize: "24px",
									lineHeight: "16px",
								}}
							>
								+
							</span>
						</button>
					</div>
				</div>
			</div>
		);
	}

 
		return (
			<div className="container">
				<div className="row">
					<div className="col col-md-6 offset-md-3 mt-2">
						<div className="todos-app card">
							{this._renderHeader()}
							<div className="card-body">
								<TodoList
									todos={todos}
									onComplete={this._onCompleteTodo}
									onDelete={this._onDeleteTodo}
								/>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
 

export default App;
