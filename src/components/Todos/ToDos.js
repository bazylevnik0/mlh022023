import React from 'react';
import css from './ToDos.module.css';

export const ToDos = ({ toDos }) => {
  if (toDos === undefined || !toDos.length) return null;
  let i = toDos.length;
  return (
    <div className={css.todos} tabIndex={""+(i+1)} nav-selectable="true">
      {toDos.map( function (toDo, index) {
        return  <div><span
          nav-selectable="true"
          key={index}
          className="todo"
          tabIndex={""+(i--)}>
          {toDo.name}
        </span> 
        <br />
        <img src= {toDo.name} />
	</div>
        } 
      )}
    </div>
  )
}

