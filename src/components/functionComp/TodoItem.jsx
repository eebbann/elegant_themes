import React from 'react'

export default function TodoItem(prop) {
	const{id, title, complete, ocComplete} = props;

	//oncompleteCheck function
	const _onCompleteCheck = (e)=>{
		_onCompleteCheck(id);
	}
	
	const _renderCheckbox =()=>{
		const attrs ={};

		if(complete){
			attrs.checked = "checked";
		}
	}
	return (
		<div className="col-2 todo-item__checkbox">
			<input
			type='checkbox'
			className='form-control'
      onChange={_onCompleteCheck}
			{...attrs}/>

		</div>
	)
}
