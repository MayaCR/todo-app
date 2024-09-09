export function showInbox() {
	updatePage('Inbox')
}

export function showToday() {
	updatePage('Today')
}

export function showUpcoming() {
	updatePage('Upcoming')
}

function updatePage(pageHeader, pageSection = null) {
	const header = document.querySelector('#header')
	// const section = document.querySelector('#task-list-wrapper')

	header.textContent = pageHeader
	// section.textContent = ''
	// pageSection !== null
	// 	? section.appendChild(pageSection)
	// 	: (section.textContent = '')
}
