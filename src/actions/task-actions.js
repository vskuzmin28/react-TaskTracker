import utils from '../utils'

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

const clearTaskData = () => {
  taskData.forEach((_, k) => taskData.set(k, ''))
}

const handleTaskTitleChange = ctx =>
  (e) => {
    taskData.set('taskTitle', e.target.value)
    console.log(taskData)
  }

const handleTaskBodyChange = ctx =>
  (e) => {
    taskData.set('taskBody', e.target.value)
    console.log(taskData)
  }

const handleTaskStatusChange = ctx =>
  (e) => {
    taskData.set('taskStatus', e.target.value)
    console.log(taskData)
  }

const handleTaskPriorityChange = ctx =>
  (e) => {
    taskData.set('taskPriority', e.target.value)
    console.log(taskData)
  }

const handleTaskSubmit = ctx =>
  (e) => {
    e.preventDefault()

    if (taskData.get('taskTitle').length < 3) {
      return 'слишком короткое название для задачи'
    }

    if (taskData.get('taskBody').length < 3) {
      return 'слишком короткое описание заддачи'
    }

    const status = Number.parseInt(taskData.get('taskStatus'), 10)
    const priority = Number.parseInt(taskData.get('taskPriority'), 10)

    if ((status < 0) || (status > 2)) {
      return 'ожидался статус задачи от 0 до 2'
    }

    if ((priority < 0) || (priority > 2)) {
      return 'ожидался приоритет задачи от 0 до 2'
    }

    const { tasks } = ctx.state

    const newTask = {
      "uid": utils.uuidGenerator(),
      "priority": priority,
      "status": status,
      "date": Date.now(),
      "taskTitle": taskData.get('taskTitle'),
      "taskBody": taskData.get('taskBody')
    }

    clearTaskData()

    ctx.setState({
      tasks: [newTask, ...tasks],
      isAddTaskShown: false,
    })
  }

export default {
  handleTaskDeletion,
  handleViewTypeChange,
  handleTaskTitleChange,
  handleTaskBodyChange,
  handleTaskStatusChange,
  handleTaskPriorityChange,
  handleTaskSubmit,
  onTaskAddClick,
  onTaskAddCloseClick,
}
