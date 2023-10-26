import express from 'express'
import session, { SessionOptions } from 'express-session'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport' 
dotenv.config()

import connectSQL from './database/connectSQL'
import userRoutes from './routes/userRoutes'
import bunRoutes from './routes/bunRoute'
import authRoutes from './routes/authRoutes'

connectSQL()
require('./config/passport')
const app = express()

app.use(cors({
    methods: ['GET', 'PATCH', 'DELETE', 'PUT'],
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'20611221',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge:8640000*30
    }
} as SessionOptions))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api', userRoutes)
app.use('/api/game', bunRoutes)
app.use('/auth', authRoutes)


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})