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

const onTaskCloseClick = ctx =>
  (e) => {
    e.preventDefault()

    ctx.setState({
      isAddTaskShown: false,
      isEditTaskShown: false,
    })
  }

const taskData = new Map()

const clearTaskData = () => {
  taskData.forEach((_, k) => taskData.set(k, ''))
}

const handleTaskTitleChange = ctx =>
  (e) => {
    taskData.set('taskTitle', e.target.value)
  }

const handleTaskBodyChange = ctx =>
  (e) => {
    taskData.set('taskBody', e.target.value)
  }

const handleTaskStatusChange = ctx =>
  (e) => {
    taskData.set('taskStatus', e.target.value)
  }

const handleTaskPriorityChange = ctx =>
  (e) => {
    taskData.set('taskPriority', e.target.value)
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

const handleTaskSubmitAfterEdition = ctx =>
  (e) => {
    e.preventDefault()

    const {
      tasks,
      editTaskUid,
      editTaskPriority,
      editTaskStatus,
      editTaskTitle,
      editTaskBody,
    } = ctx.state

    if (!editTaskTitle && (taskData.get('taskTitle').length < 3)) {
      return 'слишком короткое название для задачи'
    }

    if (!editTaskBody && (taskData.get('taskBody').length < 3)) {
      return 'слишком короткое описание заддачи'
    }

    const status = Number.parseInt(taskData.get('taskStatus'), 10)
    const priority = Number.parseInt(taskData.get('taskPriority'), 10)

    if (!editTaskStatus && ((status < 0) || (status > 2))) {
      return 'ожидался статус задачи от 0 до 2'
    }

    if (!editTaskPriority && ((priority < 0) || (priority > 2))) {
      return 'ожидался приоритет задачи от 0 до 2'
    }

    const restTasks = tasks.filter(({ uid }) => uid !== editTaskUid)

    const newTask = {
      "uid": utils.uuidGenerator(),
      "priority": Number.isNaN(priority) ? editTaskPriority : priority,
      "status": Number.isNaN(status) ? editTaskStatus : status,
      "date": Date.now(),
      "taskTitle": taskData.get('taskTitle') ? taskData.get('taskTitle') : editTaskTitle,
      "taskBody": taskData.get('taskBody') ? taskData.get('taskBody') : editTaskBody
    }

    clearTaskData()

    ctx.setState({
      tasks: [newTask, ...restTasks],
      isEditTaskShown: false,
      editTaskPriority: 0,
      editTaskStatus: 0,
      editTaskTitle: '',
      editTaskBody: '',
    })
  }

const onTaskEditClick = ctx =>
  (e, taskId) => {
    e.preventDefault()

    const { tasks } = ctx.state
    const task = tasks.find(({ uid }) => uid === taskId)

    if (!task) {
      return 'Не найден таск с заданным ид'
    }

    const {
      uid,
      priority,
      status,
      date,
      taskTitle,
      taskBody,
    } = task

    ctx.setState({
      editTaskUid: uid,
      editTaskPriority: priority,
      editTaskStatus: status,
      editTaskTitle: taskTitle,
      editTaskBody: taskBody,
      isEditTaskShown: true,
    })
  }

const moveInArray = (arr, from, to) => {
  arr.splice(to, 0, arr.splice(from, 1)[0])
}

const onTaskDragEnd = ctx =>
  (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    const { tasks } = ctx.state

    const filteredTasks = tasks.filter(({ status }) => status === Number.parseInt(targetLaneId, 10))

    /* const realPos = (position === filteredTasks.length) || (position === filteredTasks.length - 1)
      ? position === filteredTasks.length
          ? tasks.findIndex(({ uid }) => uid === filteredTasks[filteredTasks.length - 1].uid)
          : tasks.findIndex(({ uid }) => uid === filteredTasks[filteredTasks.length - 1].uid) + 1
      : tasks.findIndex(({ uid }) => uid === filteredTasks[position].uid) */

    let realPos = 0

    if ((filteredTasks.length === 1) && (position > 0)) {
      realPos = tasks.length - 1
    } else if ((filteredTasks.length > 0) && (position === filteredTasks.length)) {
      realPos = tasks.length - 1
    } else if ((filteredTasks.length > 1) && (position < filteredTasks.length)) {
      if (position === 0) {
        realPos = tasks.findIndex(({ uid }) => uid === filteredTasks[position].uid)
      } else {
        realPos = tasks.findIndex(({ uid }) => uid === filteredTasks[position].uid)
      }
    }


    const indexOfChangedCard = tasks.findIndex(({ uid }) => uid === cardDetails.uid)
    tasks[indexOfChangedCard].status = Number.parseInt(targetLaneId, 10)

    
    moveInArray(tasks, indexOfChangedCard, realPos)

    ctx.setState({
      tasks: tasks
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
  handleTaskSubmitAfterEdition,
  onTaskAddClick,
  onTaskEditClick,
  onTaskCloseClick,
  onTaskDragEnd,
}
