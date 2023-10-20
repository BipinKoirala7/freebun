import passport from "passport";
import express,{Response,Request} from "express";

const userRoutes = express.Router()

userRoutes.get('/user/:id', (req:Request,res:Response) => {
    console.log(req.params.id)
    res.send({
        message: 'currently the server is not running properly',
        UserId:req.params.id
    })
})

export default userRoutes