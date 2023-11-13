import express from 'express'
import session, { SessionOptions } from 'express-session'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport' 
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import {default as connectMongoDBSession} from 'connect-mongodb-session'
const MongoDBStore = connectMongoDBSession(session);
dotenv.config()

// import connectSQL from './database/connectSQL'
import userRoutes from './routes/userRoutes'
import beeRoutes from './routes/beeRoute'
import authRoutes from './routes/authRoutes'
import gameRoutes from './routes/gameRoutes'
import wordCollectionRoutes from './routes/wordCollectionRoutes'

// connectSQL()
require('./config/passport')
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors({
    methods: ['GET', 'PATCH', 'DELETE', 'PUT'],
    credentials: true,
    origin:'http://localhost:5173'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const store = new MongoDBStore({
                uri: process.env.MONGO_DB_URL as string,
                collection:'freebee-session'
            })

app.use(session({
    store: store,
    secret: '20611221',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge:8640000*300000
    }
} as SessionOptions))

store.on('error',(error)=> console.log(error))

app.use(passport.initialize())
app.use(passport.session())

// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });

app.use('/api/users', userRoutes)
app.use('/api/bee', beeRoutes)
app.use('/auth', authRoutes)
app.use('/api/gameCollection', gameRoutes)
app.use('/api/wordCollection',wordCollectionRoutes)


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})