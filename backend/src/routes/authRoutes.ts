import express, { Response, Request } from 'express';
import passport from 'passport'
import dotenv from 'dotenv'
dotenv.config()

const authRoutes = express.Router()

// google authentication routes
authRoutes.get('/google',passport.authenticate('google',{scope:['profile']}), (req:Request, res:Response) => {
    console.log('google callback is triggered')
})

authRoutes.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (res: Response) => {
    return res.redirect(process.env.CLIENT_DOMAIN as string)
})

export default authRoutes
// Remember
// 1) to change the failure redirect to the home page or the login page in client domain