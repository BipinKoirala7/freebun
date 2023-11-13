import axios from 'axios';
import { AxiosResponse } from 'axios';
import express,{Request, Response, response} from 'express';
import { getResponseObject } from '../lib/util';
import { GameDataT } from '../types';
const bunRoutes = express.Router()

bunRoutes.get('/new', async (req: Request, res: Response) => {
    try {
        const result:AxiosResponse<GameDataT> = await axios.get('https://freebee.fun/cgi-bin/random')
        const data = result.data
        console.log(data) 
        res.status(200).send(getResponseObject(result.status,[data],true,result.statusText))
    }
    catch (error) {
        res.status(400).send(getResponseObject(res.statusCode,[],false,'Something went wrong'))
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