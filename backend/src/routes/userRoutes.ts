import express, { Response, Request } from "express";
import { SessionPassportUserT } from "../types";

const userRoutes = express.Router()

userRoutes.get('/session/user', (req: Request<SessionPassportUserT>, res: Response) => {
    console.log(req.user)
    if (req.user) {
        res.send({
            message: 'User is present in the session',
            IsUserInSession:true,
            User: req.user,
        })
    }
    else {
        res.send({
            message: 'User is not present in the session',
            IsUserInSession: false,
            User: null
        })
    }
})

export default userRoutes 