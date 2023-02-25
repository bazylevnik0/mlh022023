import React from 'react';
import css from './ToDos.module.css';

export const ToDos = ({ toDos }) => {
  if (toDos === undefined || !toDos.length) return null;

  return (
    <div className={css.todos}>
      {toDos.map( function (toDo, index) {
        return  <div>
        <span
          nav-selectable="true"
          key={index}
          className={`${css.todo} ${toDo.completed ? css.completed : ''}`}>
          {toDo.name}
        </span><br />
        <img
      	  src= {toDo.name} />
	<hr/>
        </div>
        } 
      )}
    </div>
  )
}

