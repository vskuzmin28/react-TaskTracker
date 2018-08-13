import React from 'react'

const EditTask = (props) => {

  return (
    <div className="modal-bg modal__edit-task">
      <div className="modal">
        <a className="modal__close" href="#" title="">
          <img src="../img/close.png" alt="@@" />
        </a>
        <h2 className="modal__title">Изменение задачи</h2>
          <form action="/" method="post">
            <input type="text" name="" placeholder="Название" />
              <input type="text" name="" placeholder="Статус" />
                <input type="text" name="" placeholder="Приоритет" />
                  <textarea>Описание</textarea>
        </form>
      </div>
    </div>
  )
}

export default EditTask
