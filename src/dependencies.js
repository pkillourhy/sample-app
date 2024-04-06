const handlers = require('./handlers')
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { Router } = require('./router')

const DynamoDBClient = new DynamoDBClient({ region: 'us-west-2' })
const Router = new Router({
	'GET/v1/sample_endpoint': new handlers.SampleHandler(DynamoDBClient)
})

module.exports = {
	Router
}
