import React from 'react'

const EditTask = (props) => {
  return (
    <div className="modal-bg modal__edit-task">
      <div className="modal">
        <a 
          className="modal__close" 
          href="#" 
          title=""
          onClick={props.onCloseClick}
        >
          <img src="../img/close.png" alt="@@" />
        </a>
        <h2 className="modal__title">Изменение задачи</h2>
          <form onSubmit={props.onTaskSubmit} method="post">
            <input 
              type="text" 
              name="" 
              placeholder="Название" 
              defaultValue={props.editTaskTitle}
              onChange={props.onTaskTitleChange}
            />
            <input 
              type="text" 
              name="" 
              placeholder="Статус"
              defaultValue={props.editTaskStatus}
              onChange={props.onTaskStatusChange}
            />
            <input 
              type="text" 
              name="" 
              placeholder="Приоритет"
              defaultValue={props.editTaskPriority}
              onChange={props.onTaskPriorityChange}
            />
            <textarea
              defaultValue={props.editTaskBody}
              onChange={props.onTaskBodyChange}                
            />
          <button type="submit" className="btn-orange">Изменить</button>
        </form>
      </div>
    </div>
  )
}

export default EditTask
