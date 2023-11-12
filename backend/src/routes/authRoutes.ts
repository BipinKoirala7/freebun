import express, { Response, Request } from 'express';
import passport from 'passport'
import dotenv from 'dotenv'
dotenv.config()

const authRoutes = express.Router()

// registration with credentials
authRoutes.post('/register', passport.authenticate('local-register',
    {
        failureRedirect: process.env.CLIENT_DOMAIN + '/',
        successRedirect: process.env.CLIENT_DOMAIN as string
    })
)

// google authentication routes
authRoutes.get('/google', passport.authenticate('google', { scope: ['profile','email'] }),
    (req: Request, res: Response) => {
        console.log('google callback is triggered')
})

authRoutes.get('/google/callback', passport.authenticate('google',{ failureRedirect: 'http://localhost:5173/auth/register' }),
    (req:Request,res: Response) => {
        return res.redirect(process.env.CLIENT_DOMAIN as string)
})

export default authRoutes
// Remember
// 1) to change the failure redirect to the home page or the login page in client domain