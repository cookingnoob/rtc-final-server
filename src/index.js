import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import {fileURLToPath} from 'url'
import path from 'path'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'

//CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet)
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}))
app.use(morgan('common'))
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())




app.use('/', (req, res) => {
    res.send('<h1>Sí funciona</h1>')
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`escuchando solicitudes de ${PORT}`)
})
