import React, { Fragment } from 'react'

import Header from '../../components/Header'
import Task from '../../components/Task'
import Footer from '../../components/Footer'

const Index = (props) => {
  const makeTaskEntry = task => (
    <Task
      key={task.uid}
      {...Object.assign({}, task, {
        onDeleteTaskClick: props.onDeleteTaskClick,
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
      <Header headerTitle={props.headerTitle} />
      <div>
        <main className="scrum-view container">
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
