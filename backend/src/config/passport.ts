import passport from "passport";
import local from 'passport-local'
import Google, { StrategyOptions as googleStrategyOptions } from 'passport-google-oauth20'
import axios, { AxiosResponse } from "axios";
import dotenv from 'dotenv'

import { UserT } from "../types";
import { generateUniqueId } from "../lib/util";
dotenv.config()

const localStrategy = local.Strategy
passport.use(new localStrategy((email:string, password:string,done:Function) => {
    console.log(email, password)
    done(null,email)
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
                console.log(response)
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
                const newUser = await res.data
                console.log(newUser)
                return cb(null,newUser)
            }
        }
        catch (error) {
            console.log(error)
            cb('Something went wrong')
        }
}))

passport.serializeUser((user, done) => {
    // check the user in database and just pass the id not the whole user object
    console.log(user)
    done(null, user)
})

passport.deserializeUser((id:string, done) => {
    done(null, id)
})