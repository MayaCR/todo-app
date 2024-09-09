class Task {
	constructor(
		title,
		description,
		dueDate = null,
		priority = null,
		project = null,
		isComplete = false,
	) {
		this.title = title
		this.description = description
		this.dueDate = dueDate
		this.priority = priority
		this.project = project
		this.isComplete = isComplete
	}
}

function createTask() {}
