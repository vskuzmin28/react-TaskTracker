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

export default {
  handleTaskDeletion,
}
