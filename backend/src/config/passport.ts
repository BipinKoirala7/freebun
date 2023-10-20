import passport from "passport";
import Google from 'passport-google-oauth20'
import dotenv from 'dotenv'
dotenv.config()

const GoogleStrategy = Google.Strategy

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL:'https://localhost:5173/auth/google/callback'
}, (acesstoken:string, refreshtoken:string, profile, cb:Function) => {
    // here the profile is checked to the database if it is present in the database or not!
}))

passport.serializeUser((user, done) => {
    // check the user in database and just pass the id not the whole user object
    done(user)
})

passport.deserializeUser((user, done) => {
    done(user)
})
