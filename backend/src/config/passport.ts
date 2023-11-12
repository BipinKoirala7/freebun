import passport from "passport";
import local from 'passport-local'
import Google, { StrategyOptions as googleStrategyOptions } from 'passport-google-oauth20'
import axios, { AxiosResponse } from "axios";
import dotenv from 'dotenv'

import { ServerApiResponsePropsT, UserT } from "../types";
import { generateUniqueId } from "../lib/util";
dotenv.config()

const localStrategy = local.Strategy
passport.use('local-register',new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback:true
}, async function verify (req, email: string, password: string, cb) {
    const body = req.body
    try {console.log('authentication start')
        const res = await axios.get(`http://localhost:3000/users?email=${email}`)
        const AvailableUser = res.data
        console.log('Available user',AvailableUser)
        if (AvailableUser.length > 0) {
            console.log('Existing user with given user is availabe so stoppping authentication')
            cb(null)
            return
        }
        else {
            console.log('Existing user with given user is not availabe')
            const newUser:UserT = {
                user_id: generateUniqueId(20),
                provider_id: '',
                email: body.email,
                password: body.password,
                username: body.username,
                provider: 'credentials',
                photos:''
            }
            const res:AxiosResponse<UserT> = await axios.post('http://localhost:3000/users', newUser)
            const user = res.data
            console.log('Posted User',user)
            req.login(user, (err) => {
                console.log('User logged in')
                if (err) {
                    console.log('error while logging in user ')
                    cb(err,false)
                }
                else {
                    console.log('user logged in')
                    cb(null, user)
                }
            })
        }
        console.log('auth successful')
    }
    catch (error) {
        console.log('error while logging in user',error)
        cb(error)
    }
}))

passport.use('local-signIn',new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback:true
}, async (req, email: string, password: string, cb) => {
    console.log('RequestBody',req.body) 
    console.log(email,password)
    try {
        const res = await axios.get(`http://localhost:3000/users?email=${email}`)
        const AvailableUser = res.data
        console.log('Available user',AvailableUser)
        if (AvailableUser.length > 0) {
            cb(null,AvailableUser)
            return
        }
        else {
            cb(null, false)
            return
        }
    }
    catch (error) {
        cb(error,false)
    }
}))

// GOOGLE STRATEGY 
const GoogleStrategy = Google.Strategy

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: process.env.SERVER_DOMAIN + `/auth/google/callback` as string
} as googleStrategyOptions,
    async (acesstoken: string, refreshtoken: string, profile: Google.Profile, cb) => {
        try {
            const user:AxiosResponse = await axios.get(`${process.env.BACKEND_URL}/users?provider_id=${profile.id}` as string)
            const response:Array<Google.Profile> = await user.data
            if (response.length > 0) {
                cb(null,response)  
            }
            else {
                console.log(profile)
                const res:AxiosResponse = await axios.post(`${process.env.BACKEND_URL}/users` as string, {
                    user_id: generateUniqueId(20),
                    provider_id: profile.id,
                    username: profile.displayName,
                    email:profile._json.email,
                    password: '',
                    photos:profile._json.picture,
                    provider: profile.provider,
                    email_verified:profile._json.email_verified
                } as UserT)
                const newUser:UserT = await res.data
                return cb(null,newUser)
            }
        }
        catch (error:any) {
            console.log(error)  
            cb(error)
        }
    }))

passport.serializeUser((user:any, done) => {
    console.log('serializeUser',user)
    // check the user in database and just pass the id not the whole user object
    // console.log(user)
    done(null, user.user_id)
})

passport.deserializeUser(async (id, done) => {
    console.log('deseriliazing id ',id)
    try {
        const response: AxiosResponse<ServerApiResponsePropsT<UserT>> = await axios.get(`http://localhost:4000/api/users/user/${id}`)
        const data = response.data
        console.log(data)

        if (data.data.length > 0) {
            console.log('user found while deserializing user')
            done(null,data.data)
        }
        else {
            console.log('user not found while deserializing')
            done(false,null)
        }
    }
    catch (error) {
        console.log('error while deserializing user')
        done(error , false)
    }
})