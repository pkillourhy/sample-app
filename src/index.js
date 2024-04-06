const { Router } = require('./dependencies')

class MainHandler {
	handle(event) {
		return Router.dispatch(event);
	}
}