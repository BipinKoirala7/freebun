import axios from 'axios';
import { AxiosResponse } from 'axios';
import express,{Request, Response, response} from 'express';
const bunRoutes = express.Router()

bunRoutes.get('/new', async (req:Request, res:Response) => {
    try {
        const result:AxiosResponse = await axios.get('https://freebee.fun/cgi-bin/random')
        const data = await result.data
        console.log(data)
        res.status(200).send({
            statusCode: 200,
            ok: true,
            result:data
        })
    }
    catch (error) {
        res.status(400).send({
            statuscode:400,
            message:'Error unable to get the game properties'
        })
    }
})

bunRoutes.get('/today',async (req:Request,res: Response)=>{
    try{
        const result:AxiosResponse = await axios.get('https://freebee.fun/cgi-bin/today')
        const data = result.data
        res.status(200).send({
            status: 200,
            ok: true,
            data:data
        })
    }
    catch (error) {
        res.status(500).send({
            status: 500,
            ok: false,
            message:'could not get the data '
        })
    }
})

export default bunRoutes