import { mainGET } from './routes/main_route.js'
import { fileURLToPath, pathToFileURL } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const allowedRoutes = ['main', 'first', 'second', 'third']

export async function router(req, res, url, payload, body) {
  try {
    const requestMethod = req.method
    const urlPath = url.pathname
    const route = urlPath.replace('/', '')

    let modulePath = ''
    if (allowedRoutes.includes(route)) {
      const pathToFile = `routes/${route}_route.js`
      modulePath = pathToFileURL(path.resolve(__dirname, pathToFile))
    } else {
      mainGET(req, res, payload, body)
      return
    }

    const { [requestMethod]: handler } = await import(modulePath)

    if (handler) {
      handler(req, res, payload, body)
    }
  } catch (e) {
    console.log(e)
    res.writeHead(500, {
      'Content-Type': 'text/html'
    })
    res.end('<h1>Server error</h1>')
  }
}
