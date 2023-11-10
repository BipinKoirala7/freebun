import express from 'express'
import session, { SessionOptions } from 'express-session'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport' 
dotenv.config()

import connectSQL from './database/connectSQL'
import userRoutes from './routes/userRoutes'
import beeRoutes from './routes/beeRoute'
import authRoutes from './routes/authRoutes'
import gameRoutes from './routes/gameRoutes'
import wordCollectionRoutes from './routes/wordCollectionFromUser'

connectSQL()
require('./config/passport')
const app = express()

app.use(cors({
    methods: ['GET', 'PATCH', 'DELETE', 'PUT'],
    credentials: true,
    origin:'http://localhost:5173'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: '20611221',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge:8640000*3000
    }
} as SessionOptions))

app.use(passport.initialize())
app.use(passport.session())


app.use('/api/users', userRoutes)
app.use('/api/bee', beeRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/gameCollection', gameRoutes)
app.use('/api/wordCollection',wordCollectionRoutes)


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})