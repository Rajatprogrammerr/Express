import express from "express"
// import dotenv from 'dotenv'
// import { configDotenv } from "dotenv"
import 'dotenv/config.js'; 

// dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About page')
})
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
