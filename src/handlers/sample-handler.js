class SampleHandler {
	constructor(dynamoDBClient) {
		this.dynamoDBClient = dynamoDBClient
	}

	handle(event) {
		const response = {
			statusCode: 200,
			body: JSON.stringify({
				message: 'Success'
			}),
		}
		return response
	}
}

module.exports = SampleHandler
