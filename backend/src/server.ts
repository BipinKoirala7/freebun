import express from 'express'
import session from 'express-session'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})