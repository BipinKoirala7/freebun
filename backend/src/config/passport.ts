import passport from "passport";
import local from 'passport-local'
import Google, { StrategyOptions as googleStrategyOptions } from 'passport-google-oauth20'
import dotenv from 'dotenv'
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
} as googleStrategyOptions, (acesstoken:string, refreshtoken:string, profile:Google.Profile, cb) => {
    return cb(null,profile)
}))

passport.serializeUser((user, done) => {
    // check the user in database and just pass the id not the whole user object
    console.log(user)
    done(null, user)
})

passport.deserializeUser((id:string, done) => {
    done(null, id)
})