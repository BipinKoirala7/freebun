import express, { Response, Request } from "express";
import axios from "axios";

import { SessionPassportUserT } from "../types";
import { getResponseObject } from "../lib/util";

const userRoutes = express.Router()

userRoutes.get('/session/user', (req: Request<SessionPassportUserT>, res: Response) => {
    console.log('Request user', req.user)
    console.log(req.session)
    if (req.user) {
        console.log('user found')
        res.send({
            message: 'User is present in the session',
            IsUserInSession:true,
            User: req.user,
        })
    }
    else {
        console.log('user not found')
        res.send({
            message: 'User is not present in the session',
            IsUserInSession: false,
            User: null
        })
    }
})

// get user by user_id
userRoutes.get('/user/:user_id', async (req: Request, res: Response) => {
    const user_id = req.params.user_id
    console.log(user_id)
    try {
        const result = await axios.get(`http://localhost:3000/users?user_id=${user_id}`)
        const data = await result.data
        if (data.length > 0) {
            res.status(200).send(
                getResponseObject(res.statusCode,data,true,'Request Accepted with user')
            )
        }
        else {
            res.status(200).send(getResponseObject( res.statusCode, data, false, 'There is no user with the given information' )
            )
        }
    }
    catch (error:any) {
        res.status(400).send(getResponseObject(  res.statusCode, [], true , 'Something went wrong'))
    }
})

userRoutes.post('/user/new', async (req: Request, res: Response) => {
    const body = req.body
    console.log(body)
    try {
        const result = await axios.post('http://localhost:3000/users',body)
        const data = await result.data
        console.log(data)
        res.status(res.statusCode).send(getResponseObject(res.statusCode,data,true,'User created Sucessfully'))
    }
    catch (error) {
        res.status(res.statusCode).send(getResponseObject(res.statusCode,[],false,'Something went wrong'))
    }
})

// change the user properties
userRoutes.patch('/user/:user_id/properties', async (req: Request, res: Response) => {
        // problem in json server but wont be a problem with mysql
    console.log(req.params)
    console.log(req.body)
    try {
        const result = await axios.patch(`http://localhost:3000/users?user_id=${req.params.user_id}`, req.body)
        const data = await result.data
        console.log(data)
        res.status(res.statusCode).send(getResponseObject(res.statusCode,data,true,'User email changed'))
    }
    catch (error) {
        res.status(res.statusCode).send(getResponseObject(res.statusCode,[],false,'Something went wrong'))
    }
})


export default userRoutes 