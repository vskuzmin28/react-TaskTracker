import React, { Fragment } from 'react'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'

import utils from '../../utils'

import Header from '../../components/Header'
import AddTask from '../../components/AddTask'
import EditTask from '../../components/EditTask'
import Sidebard from '../../components/Sidebar'
import Task from '../../components/Task'
import Footer from '../../components/Footer'

const Index = (props) => {
  const SortableItem = SortableElement(({ value }) =>
    <Task
      {...Object.assign({}, value, {
        onTaskEditClick: props.onTaskEditClick,
        onDeleteTaskClick: props.onDeleteTaskClick,
        priority: utils.formatPriority(value.priority),
        date: utils.formatDate(value.date)
      })}
    />
  )

  const makeSortableList = statusIndex =>
    SortableContainer(({ items }) => {
      return (
        <ul className="column__body">
          {items
            .filter(({ status }) => status === statusIndex)
            .map((task, index) => <SortableItem
              key={task.uid}
              index={index}
              value={task}
            />)
          }
        </ul>
      )
    })

  const SortableListOfPlannedTasks = makeSortableList(0)

  const SortableListOfDoingTasks = makeSortableList(1)

  const SortableListOfDoneTasks = makeSortableList(2)

  const SortableContainerCommon = SortableContainer(({ items }) => {
    return (
      <main className={`container ${props.viewType}`}>
        <div className="column func-plan">
          <h4 className="column__title">План</h4>
          <ul className="column__body">
            {items
              .filter(({ status }) => status === 0)
              .map((task, index) => <SortableItem
                key={task.uid}
                index={index}
                value={task}
              />)
            }
          </ul>
        </div>
        <div className="column func-process">
          <h4 className="column__title">В процессе</h4>
          <ul className="column__body">
            {items
              .filter(({ status }) => status === 1)
              .map((task, index) => <SortableItem
                key={task.uid}
                index={index}
                value={task}
              />)
            }
          </ul>
        </div>
        <div className="column func-done">
          <h4 className="column__title">Готово</h4>
          <ul className="column__body">
            {items
              .filter(({ status }) => status === 2)
              .map((task, index) => <SortableItem
                key={task.uid}
                index={index}
                value={task}
              />)
            }
          </ul>
        </div>
      </main>
    )
  })

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
            <SortableListOfPlannedTasks items={props.tasks} axis="xy" onSortEnd={props.onTaskDragEnd} />
          </div>
          <div className="column func-process">
            <h4 className="column__title">В процессе</h4>
            <SortableListOfDoingTasks items={props.tasks} axis="xy" onSortEnd={props.onTaskDragEnd} />
          </div>
          <div className="column func-done">
            <h4 className="column__title">Готово</h4>
            <SortableListOfDoneTasks items={props.tasks} axis="xy" onSortEnd={props.onTaskDragEnd} />
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Index
