import http from 'node:http'
import { getDataFromDB } from './db.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    if (req.url === '/api' && req.method === 'GET') {

        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(destinations, null, 2))
    }
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
