import React from 'react'

const AddTask = (props) => {

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
        <form action="/" method="post">
          <input
            type="text"
            name=""
            placeholder="Название"
            onChange={props.onTaskTitleChange}
          />
          <input type="text" name="" placeholder="Статус" />
          <input type="text" name="" placeholder="Приоритет" />
          <textarea>Описание</textarea>
        </form>
      </div>
    </div>
  )
}

export default AddTask
