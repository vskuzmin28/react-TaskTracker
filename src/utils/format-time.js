import moment from 'moment'

const formatDate = (dateString) => {
  return moment(dateString).format('DD.MM.YYYY');
}

export default formatDate
