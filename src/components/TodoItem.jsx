import React from 'react';

function TodoItem(props) {
	const { id, title, complete, onComplete, onDelete } = props;

	//oncompleteCheck function
	const _onCompleteCheck = (event) => {
		_onComplete(id);
	};
 
	const _onItemClick=(event)=>{
		onDelete(id);
	}
	const _renderCheckbox = () => {
		const attrs = {};

		if (complete) {
			attrs.checked = "checked";
		}

		return (
			<div className="col-2 todo-item__checkbox">
				<input
					type='checkbox'
					className='form-control'
					onChange={_onCompleteCheck}
					{...attrs} />

			</div>


		);
	};

	const _renderTitle = () => {
		return (
			<div className="col-10 todo-item__title" onclick={_onItemClick}>
				<h3>{title}</h3>
			</div>
		);
	};

	return (
		<li className="list-group-item todo-item">
			<div className="row">
				{_renderCheckbox()}
				{_renderTitle()}
			</div>
		</li>
	);
};

export default TodoItem;

