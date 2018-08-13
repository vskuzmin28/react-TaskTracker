const handleTaskDeletion = ctx =>
  (e, taskId) => {
    e.preventDefault()

    const { tasks } = ctx.state

    const hasTask = tasks.some(({ uid }) => uid === taskId)

    if (hasTask) {
      ctx.setState({
        tasks: tasks.filter(({ uid }) => uid !== taskId)
      })
    }
  }

const handleViewTypeChange = ctx =>
  (e) => {
    ctx.setState({
      viewType: e.target.value,
    })
  }

const onTaskAddClick = ctx =>
  (e) => {
    e.preventDefault()

    ctx.setState({
      isAddTaskShown: true,
    })
  }

const onTaskAddCloseClick = ctx =>
  (e) => {
    e.preventDefault()

    ctx.setState({
      isAddTaskShown: false,
    })
  }

const taskData = new Map()

const handleTaskTitleChange = ctx =>
  (e) => {
    taskData.set('taskTitle', e.target.value)
    console.log(taskData)
  }

export default {
  handleTaskDeletion,
  handleViewTypeChange,
  handleTaskTitleChange,
  onTaskAddClick,
  onTaskAddCloseClick,
}
