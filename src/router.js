class Router {
	constructor(handlers) {
		this.handlers = handlers
	}

	dispatch(event) {
		const { resource, httpMethod } = event
		return this.handlers[`${httpMethod}:${resource}`](event)
	}
}