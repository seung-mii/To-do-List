import React from 'react';

function Todo(props) {
  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={props.item.id}        // item.id 값으로 렌더링하란 의미(JPX)
        name={props.item.id}
        checked={props.item.done} // item.done 값으로 렌더링하란 의미
      />

      <label for={props.item.id}>{props.item.title}</label>
    </div>
  );
}
export default Todo;