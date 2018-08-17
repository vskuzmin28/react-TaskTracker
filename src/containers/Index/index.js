import React, { Fragment } from 'react'
import Board from 'react-trello'

import utils from '../../utils'

import Header from '../../components/Header'
import AddTask from '../../components/AddTask'
import EditTask from '../../components/EditTask'
import Sidebard from '../../components/Sidebar'
import Task from '../../components/Task'
import Footer from '../../components/Footer'

const Index = (props) => {
  const makeTaskForBoard = additionalProps =>
    (task) =>
      (<Task
        key={task.uid}
        {...Object.assign({}, task, {
          priority: utils.formatPriority(task.priority),
          date: utils.formatDate(task.date)}, additionalProps)}
      />)

  const TaskForBoard = makeTaskForBoard({
    onTaskEditClick: props.onTaskEditClick,
    onDeleteTaskClick: props.onDeleteTaskClick,
  })

  const taskFilter = statusFilter =>
    props.tasks
      .filter(({ status }) => status === statusFilter)
      .map(TaskForBoard)

  const todoTasks = taskFilter(0)

  const doingTasks = taskFilter(1)

  const doneTasks = taskFilter(2)

  const makeCardForBoard = statusFilter =>
    props.tasks
      .filter(({ status }) => status === statusFilter)
      .map(task => (task.id = String(task.uid), task))

  const boardData = {
    lanes: [
      {
        id: '0',
        title: 'Планируемые задачи',
        label: '1/3',
        cards: makeCardForBoard(0)
      },
      {
        id: '1',
        title: 'Задачи в работе',
        label: '2/3',
        cards: makeCardForBoard(1)
      },
      {
        id: '2',
        title: 'Законченные задачи',
        label: '3/3',
        cards: makeCardForBoard(2)
      },
    ]
  }

  const tasksContainerCommon = (tasks) => {
    return (
      <main className={`container ${props.viewType}`}>
        <div className="column func-plan">
          <h4 className="column__title">План</h4>
          <ul className="column__body">
            {todoTasks}
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
    )
  }

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
        {props.viewType.includes('scrum')
          ? (<main className={`container ${props.viewType}`}>
              <div className="column func-plan">
                <Board 
                  draggable
                  customCardLayout
                  handleDragEnd={props.onTaskDragEnd}
                  data={boardData}>
                  <TaskForBoard />
                </Board>
              </div>
            </main>)
          : tasksContainerCommon(props.tasks)
        }
      </div>
      <Footer />
    </Fragment>
  )
}

export default Index
