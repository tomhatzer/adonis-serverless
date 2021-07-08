import 'reflect-metadata'
import { Ignitor } from '@adonisjs/core/build/standalone'
import createRequestResponse from 'aws-lambda-create-request-response'

var app: any

function createServer() {
  return new Ignitor(__dirname).httpServer().start().catch(console.error)
}

exports.handle = (event: any, context: any, callback: any) => {
  try {
    context.callbackWaitsForEmptyEventLoop = process.env.WAIT_FOR_EMPTY_EVENT_LOOP === 'yes'

    if (app === undefined) {
      app = createServer()
    }

    const { req, res } = createRequestResponse(event, callback)

    return app(req, res)
  } catch (error) {
    console.error(error)
  }
}
