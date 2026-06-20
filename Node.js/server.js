import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) =>{
    res.write('This is a some data \n')
    res.write('This is a some more data \n')
    res.end('This is from the server!!', 'utf-8', () => {
        console.log('Response sent successfully!')
    })
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
