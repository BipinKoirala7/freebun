import express,{Request, Response} from 'express';
const bunRoutes = express.Router()

bunRoutes.get('/new', (req:Request, res:Response) => {
    res.send({
        message:'it will send the data of new game'
    })
})

export default bunRoutes