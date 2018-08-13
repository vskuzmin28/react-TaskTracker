import React from 'react'

const AddTask = (props) => {
  console.log(props)
  return (
    <div className="modal-bg modal__add-task">
      <div className="modal">
        <a 
          className="modal__close" 
          href="#" 
          title=""
          onClick={props.onCloseClick}
        >
          <img src="img/close.png" alt="@@" />
        </a>
        <h2 className="modal__title">Добавление задачи</h2>
        <form onSubmit={props.onTaskSubmit} method="post">
          <input
            type="text"
            name=""
            placeholder="Название"
            onChange={props.onTaskTitleChange}
          />
          <input
            type="text"
            name=""
            placeholder="Статус"
            onChange={props.onTaskStatusChange}
          />
          <input
            type="text"
            name=""
            placeholder="Приоритет"
            onChange={props.onTaskPriorityChange}
          />
          <textarea
            onChange={props.onTaskBodyChange}
          >
            Описание
          </textarea>
          <button type="submit" className="btn-orange">Добавить</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask
