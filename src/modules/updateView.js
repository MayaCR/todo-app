export function showInbox() {
	updateHeader('Inbox')
}

export function showToday() {
	updateHeader('Today')
}

export function showUpcoming() {
	updateHeader('Upcoming')
}

function updateHeader(pageHeader) {
	const header = document.querySelector('#header')
	header.textContent = pageHeader
}
