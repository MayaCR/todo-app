class Task {
	constructor(
		id,
		title,
		description,
		dueDate = '',
		priority = null,
		project = null,
	) {
		this.id = id
		this.title = title
		this.description = description
		this.dueDate = dueDate
		this.priority = priority
		this.project = project
	}
}
