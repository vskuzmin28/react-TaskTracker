import React from 'react'

const Sidebar = (props) => {
  return (
    <sidebar>
      <div className="user-cols container">
        <div className="user-panel">
          <h4 className="user-panel__title">Панель пользователя</h4>
          <a className="user-panel__user-name" href="#" title="">{props.fullName}</a>
          <p>{props.phone}</p>
          <p>E-mail: {props.email}</p>
          <a
            href="#"
            title=""
            onClick={props.onTaskAddClick}
          >
            Добавить задачу
          </a>
          <a 
            className="user-panel__user-exit" 
            href="#"
            title=""
            onClick={props.onLogoutClick}
          >
            Завершить сеанс
          </a>
        </div>
        <div className="user-settings">
          <h4 className="user-settings__title">Настройки</h4>
          <div className="user-settings__body">
            <div className="user-settings__body__column">
              <h4>Вид</h4>
              <form action="/" method="post">
                <div className="checkbox">
                  <input 
                    type="radio" 
                    value="brief-view" 
                    id="checkboxBrief" 
                    name="checkboxBrief"
                    checked={props.viewType === 'brief-view'}
                    onChange={props.onViewTypeChange}
                  />
                  <label htmlFor="checkboxBrief">Краткий</label>
                </div>
                <div className="checkbox">
                  <input 
                    type="radio" 
                    value="detail-view" 
                    id="checkboxDetail" 
                    name="checkboxDetail"
                    checked={props.viewType === 'detail-view'}
                    onChange={props.onViewTypeChange}
                  />
                  <label htmlFor="checkboxDetail">Подробный</label>
                </div>
                <div className="checkbox">
                  <input 
                    type="radio" 
                    value="scrum-view" 
                    id="checkboxScrum" 
                    name="checkboxScrum"
                    checked={props.viewType === 'scrum-view'}
                    onChange={props.onViewTypeChange}
                  />
                  <label htmlFor="checkboxScrum">Scrum доска</label>
                </div>
              </form>
            </div>
            <div className="user-settings__body__column">
              <h4>Сортировка</h4>
              <form action="/" method="post">
                <div className="checkbox">
                  <input type="checkbox" value="None" id="checkboxStatus" name="checkboxStatus" />
                  <label htmlFor="checkboxStatus">По статусу</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" value="None" id="checkboxPriority" name="checkboxPriority" />
                  <label htmlFor="checkboxPriority">По приоритету</label>
                </div>
              </form>
            </div>
            <div className="user-settings__body__column">
              <h4>Автобновление</h4>
              <form action="/" method="post">
                <div className="checkbox">
                  <input type="checkbox" value="None" id="checkboxFiveSecs" name="checkboxFiveSecs" />
                  <label htmlFor="checkboxFiveSecs">5 сек</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" value="None" id="checkboTenSecs" name="checkboTenSecs" />
                  <label htmlFor="checkboTenSecs">10 сек			</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </sidebar>
  )
}

export default Sidebar
