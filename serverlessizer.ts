import 'reflect-metadata'
import { Ignitor } from '@adonisjs/core/build/standalone'
import Serverlessize from '@satheler/s12r'

process.on('unhandledRejection', (reason) => {
  console.error(reason)
})

process.on('uncaughtException', (reason) => {
  console.error(reason)
})

let server: Function

async function bootstrapServer () {
  const ignitor = new Ignitor(__dirname)
  const httpServer = ignitor.httpServer()

  httpServer.application.setup()
  httpServer.application.registerProviders()
  await httpServer.application.bootProviders()
  httpServer.application.requirePreloads()

  const serverCore = httpServer.application.container.use('Adonis/Core/Server')
  serverCore.errorHandler('App/Exceptions/ExceptionHandler')
  serverCore.optimize()

  const server = serverCore.handle.bind(serverCore)
  return server
}

export const handle = async (...args: any[]) => {
  if(!server) {
    server = await bootstrapServer()
  }

  const { request, response } = Serverlessize(args)
  return server(request, response)
}
