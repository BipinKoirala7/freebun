import express,{Response,Request} from "express";

const userRoutes = express.Router()

userRoutes.get('/session/user', (req: Request, res: Response) => {
    console.log(req.session)
    res.send({
        message: 'currently the server is not running properly',
        User: req.session,
    })
})

export default userRoutes 