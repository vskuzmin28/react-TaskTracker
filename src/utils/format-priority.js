const formatPriority = (proitiryIndex) => {
  const proitiryMap = new Map()

  proitiryMap.set(0, 'низкий')
  proitiryMap.set(1, 'средний')
  proitiryMap.set(2, 'высокий')

  if (!proitiryMap.get(proitiryIndex)) {
    return 'низкий'
  }

  return proitiryMap.get(proitiryIndex)
}

export default formatPriority
