import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function handler(req, res) {
  // Get environment variables
  const basicAuthUser = process.env.BASIC_AUTH_USER
  const basicAuthPass = process.env.BASIC_AUTH_PASS

  // Skip authentication if environment variables are not set
  if (!basicAuthUser || !basicAuthPass) {
    return serveApp(req, res)
  }

  // Get the Authorization header
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Synapse Access Required"')
    return res.status(401).send('Authentication required')
  }

  // Decode base64 credentials
  try {
    const base64Credentials = authHeader.slice(6) // Remove "Basic " prefix
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
    const [username, password] = credentials.split(':')

    // Verify credentials
    if (username !== basicAuthUser || password !== basicAuthPass) {
      res.setHeader('WWW-Authenticate', 'Basic realm="Synapse Access Required"')
      return res.status(401).send('Invalid credentials')
    }
  } catch (error) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Synapse Access Required"')
    return res.status(401).send('Invalid authorization header')
  }

  // If authentication successful, serve the app
  return serveApp(req, res)
}

function serveApp(req, res) {
  // For SPA, always serve index.html
  const distPath = path.join(__dirname, '..', 'dist')
  const indexPath = path.join(distPath, 'index.html')
  
  try {
    const indexHtml = fs.readFileSync(indexPath, 'utf8')
    res.setHeader('Content-Type', 'text/html')
    res.send(indexHtml)
  } catch (error) {
    res.status(404).send('App not found')
  }
}