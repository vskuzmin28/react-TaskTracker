import React from 'react'

const Task = (props) => {

  return (
    <li className="column__body__task">
      <p className="column__body__task__priority-title">
        Приоритет:
        <span className="normal">
          {props.priority}
        </span>
      </p>
      <div className="column__body__task__date">
        Дата: {props.date}
      </div>
      <p className="column__body__task__title">
        {props.taskTitle}
      </p>
      <p className="column__body__task__description">
        {props.taskBody}
      </p>
      <ul>
        <li><a href="#" title="">Изменить</a></li>
        <li>
          <a
            href="#"
            title=""
            onClick={(e) => props.onDeleteTaskClick(e, props.uid)}
          >
            Удалить
          </a>
        </li>
      </ul>
    </li>
  )
}

export default Task
