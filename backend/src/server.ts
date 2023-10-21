import express from 'express'
import session, { SessionOptions } from 'express-session'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import connectSQL from './database/connectSQL'
dotenv.config()
connectSQL()

import userRoutes from './routes/userRoutes'

const app = express()

app.use(cors({
    methods: ['GET', 'PATCH', 'DELETE', 'PUT'],
    credentials: true,
}))
app.use(express.json())
app.use(session({
    secret:'20611221',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge:86400*30
    }
} as SessionOptions))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api',userRoutes)


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})