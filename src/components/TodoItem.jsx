import React from 'react';

const TodoItem = (props) => {
  const { id, title, complete, onComplete, onDelete } = props;

  const _onCompleteCheck = (event) => {
    onComplete(id);
  };

  const _onItemClick = (event) => {
    onDelete(id);
  };

  const _renderCheckbox = () => {
    const attrs = {};

    if (complete) {
      attrs.checked = 'checked';
    }

    return (
      <div className="col-2 todo-item__checkbox">
        <input
          className="form-control"
          onChange={_onCompleteCheck}
          type="checkbox"
          {...attrs}
        />
      </div>
    );
  };

  const _renderTitle = () => {
    return (
      <div className="col-10 todo-item__title" onClick={_onItemClick}>
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

