import './styles/main.css'
import { showInbox, showToday, showUpcoming } from './modules/updateView'

const inboxBtn = document.querySelector('#inboxBtn')
const todayBtn = document.querySelector('#todayBtn')
const upcomingBtn = document.querySelector('#upcomingBtn')
const addTaskBtn = document.querySelector('#addTaskBtn')

showInbox()

inboxBtn.addEventListener('click', showInbox)
todayBtn.addEventListener('click', showToday)
upcomingBtn.addEventListener('click', showUpcoming)
// addTaskBtn.addEventListener('click', toggleForm)
