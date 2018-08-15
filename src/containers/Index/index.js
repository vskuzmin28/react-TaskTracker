import React, { Fragment } from 'react'

import utils from '../../utils'

import Header from '../../components/Header'
import AddTask from '../../components/AddTask'
import EditTask from '../../components/EditTask'
import Sidebard from '../../components/Sidebar'
import Task from '../../components/Task'
import Footer from '../../components/Footer'

const Index = (props) => {
  const makeTaskEntry = task => (
    <Task
      key={task.uid}
      {...Object.assign({}, task, {
        onTaskEditClick: props.onTaskEditClick,
        onDeleteTaskClick: props.onDeleteTaskClick,
        priority: utils.formatPriority(task.priority),
        date: utils.formatDate(task.date)
      })}
    />
  )

  const plannedTasks = props.tasks
    .filter(({status}) => status === 0)
    .map(task => makeTaskEntry(task))

  const doingTasks = props.tasks
    .filter(({ status }) => status === 1)
    .map(task => makeTaskEntry(task))

  const doneTasks = props.tasks
    .filter(({ status }) => status === 2)
    .map(task => makeTaskEntry(task))

  return (
    <Fragment>
      {props.isAddTaskShown &&
        <AddTask
          onTaskTitleChange={props.handleTaskTitleChange}
          onTaskBodyChange={props.handleTaskBodyChange}
          onTaskStatusChange={props.handleTaskStatusChange}
          onTaskPriorityChange={props.handleTaskPriorityChange}
          onTaskSubmit={props.handleTaskSubmit}
          onCloseClick={props.onTaskCloseClick}
        />
      }
      {props.isEditTaskShown &&
        <EditTask
          editTaskPriority={props.editTaskPriority}
          editTaskStatus={props.editTaskStatus}
          editTaskTitle={props.editTaskTitle}
          editTaskBody={props.editTaskBody}
          onTaskTitleChange={props.handleTaskTitleChange}
          onTaskBodyChange={props.handleTaskBodyChange}
          onTaskStatusChange={props.handleTaskStatusChange}
          onTaskPriorityChange={props.handleTaskPriorityChange}
          onTaskSubmit={props.handleTaskSubmitAfterEdition}
          onCloseClick={props.onTaskCloseClick}
        />
      }
      <Header headerTitle={props.headerTitle} />
      <Sidebard
        fullName={props.fullName}
        phone={props.phone}
        email={props.email}
        viewType={props.viewType}
        onViewTypeChange={props.handleViewTypeChange}
        onTaskAddClick={props.onTaskAddClick}
        onLogoutClick={props.onLogoutClick}
      />
      <div>
        <main className={`container ${props.viewType}`}>
          <div className="column func-plan">
            <h4 className="column__title">План</h4>
            <ul className="column__body">
              {plannedTasks}
            </ul>
          </div>
          <div className="column func-process">
            <h4 className="column__title">В процессе</h4>
            <ul className="column__body">
              {doingTasks}
            </ul>
          </div>
          <div className="column func-done">
            <h4 className="column__title">Готово</h4>
            <ul className="column__body">
              {doneTasks}
            </ul>
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Index
